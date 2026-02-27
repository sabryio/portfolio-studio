import { Paragraph } from "docx";
import type { Achievement } from "../types";
import type { ExtendedResumeConfig } from "../configuration/extended-config-types";
import { buildSectionHeader } from "./section-header-builder";
import { createTextRun } from "../utilities/text-run-factory";
import { createParagraphSpacing } from "../utilities/spacing-patterns";
import { applyLineSpacing } from "../utilities/line-spacing";

/**
 * Builds the achievements section
 * @param achievements - Array of achievement entries
 * @param config - Resume configuration for styling
 * @returns Array of paragraphs for the achievements section
 */
export function buildAchievements(
  achievements: Achievement[],
  config: ExtendedResumeConfig,
): Paragraph[] {
  const paragraphs: Paragraph[] = [];

  // Section header
  const sectionTitle = config.section_titles.achievements || "Key Achievements";
  paragraphs.push(buildSectionHeader(sectionTitle, config));

  // Achievement entries
  for (const achievement of achievements) {
    // Title
    paragraphs.push(
      new Paragraph({
        spacing: {
          ...createParagraphSpacing("entryTitle", config),
          ...applyLineSpacing("body", config),
        },
        keepNext: true,
        children: [
          createTextRun(
            {
              text: achievement.title,
              bold: true,
              size: config.typography.sizes.heading2,
              color: config.colors.text,
            },
            config,
          ),
        ],
      }),
    );

    // Description
    paragraphs.push(
      new Paragraph({
        spacing: {
          ...createParagraphSpacing("entryContent", config),
          ...applyLineSpacing("body", config),
        },
        children: [
          createTextRun(
            {
              text: achievement.description,
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
