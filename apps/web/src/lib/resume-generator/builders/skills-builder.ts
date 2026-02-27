import { Paragraph, Table, TableRow } from "docx";
import type { Skills } from "../types";
import type { ExtendedResumeConfig } from "../configuration/extended-config-types";
import { DEFAULT_SECTION_TITLES } from "../configuration/extended-defaults";
import { buildSectionHeader } from "./section-header-builder";
import { createTableRow, createTable } from "../utilities/table-factory";

/**
 * Builds the skills section with a comprehensive table
 * @param skills - Skills object with categories
 * @param config - Resume configuration for styling
 * @returns Array of elements (paragraph + table) for the skills section
 */
export function buildSkills(
  skills: Skills,
  config: ExtendedResumeConfig,
): (Paragraph | Table)[] {
  const elements: (Paragraph | Table)[] = [];

  // Use configurable section title
  const sectionTitle = config.section_titles.skills;
  elements.push(buildSectionHeader(sectionTitle, config));

  // Get column widths from config
  const [categoryWidth, skillsWidth] = config.table_config.skills_column_widths;

  // Create table rows with explicit type
  const rows: TableRow[] = [];

  // Helper function to add skill row
  const addSkillRow = (category: string, skillList: any[] | undefined) => {
    if (skillList && skillList.length > 0) {
      const skillNames = skillList.map((s) => s.name).join(", ");
      rows.push(
        createTableRow(
          [
            { width: categoryWidth, content: category, bold: true },
            { width: skillsWidth, content: skillNames },
          ],
          config,
        ),
      );
    }
  };

  // Programming Languages
  addSkillRow("Programming Languages", skills.languages);

  // Frontend Development
  addSkillRow("Frontend Development", skills.frontend);

  // Backend Development
  addSkillRow("Backend Development", skills.backend);

  // Databases & Storage
  addSkillRow("Databases & Storage", skills.databases);

  // AI & Machine Learning
  addSkillRow("AI & Machine Learning", skills.ai);

  // Messaging & Real-time
  addSkillRow("Messaging & Real-time", skills.messaging);

  // Internationalization
  addSkillRow("Internationalization (i18n)", skills.i18n);

  // Cross-Platform Development
  addSkillRow("Cross-Platform", skills.crossPlatform);

  // DevOps & Deployment
  addSkillRow("DevOps & Deployment", skills.devops);

  // Testing & QA
  addSkillRow("Testing & QA", skills.testing);

  // Tools & Other
  addSkillRow("Tools & Other", skills.tools);

  // Legacy support for old format
  if (skills.frameworks && skills.frameworks.length > 0) {
    addSkillRow("Frameworks", skills.frameworks);
  }

  // Only create table if there are rows
  if (rows.length > 0) {
    const table = createTable(
      rows,
      {
        outer: { color: config.colors.secondary, size: 1 },
        inner: { color: config.colors.accent, size: 1 },
      },
      config,
    );
    elements.push(table);
  }

  return elements;
}
