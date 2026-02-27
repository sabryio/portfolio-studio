import { Paragraph } from "docx";
import type { ExtendedResumeConfig } from "../configuration/extended-config-types";
import { buildSectionHeader } from "./section-header-builder";
import { createTextRun } from "../utilities/text-run-factory";
import { createParagraphSpacing } from "../utilities/spacing-patterns";
import { applyLineSpacing } from "../utilities/line-spacing";

/**
 * Builds the key competencies section
 * @param competencies - Array of competency strings
 * @param config - Resume configuration for styling
 * @returns Array of paragraphs for the key competencies section
 */
export function buildKeyCompetencies(
  competencies: string[],
  config: ExtendedResumeConfig,
): Paragraph[] {
  const paragraphs: Paragraph[] = [];

  // Section header
  const sectionTitle =
    config.section_titles.key_competencies || "Key Competencies";
  paragraphs.push(buildSectionHeader(sectionTitle, config));

  // Competencies as bullet points
  for (const competency of competencies) {
    paragraphs.push(
      new Paragraph({
        spacing: {
          ...createParagraphSpacing("entryContent", config),
          ...applyLineSpacing("body", config),
        },
        bullet: {
          level: 0,
        },
        children: [
          createTextRun(
            {
              text: competency,
              size: config.typography.sizes.body,
              color: config.colors.text,
            },
            config,
          ),
        ],
      }),
    );
  }

  return paragraphs;
}
