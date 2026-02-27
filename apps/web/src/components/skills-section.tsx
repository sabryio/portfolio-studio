import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  cardVariants,
  paddingVariants,
  typographyVariants,
} from "@/lib/responsive-classes";

export function SkillsSection() {
  return (
    <Card
      id="skills"
      className={cn(
        cardVariants({ size: "md" }),
        "rounded-3xl w-full h-full flex flex-col",
      )}
      aria-labelledby="skills-title"
    >
      <CardHeader className={cn(paddingVariants({ size: "lg" }))}>
        <CardTitle
          id="skills-title"
          className={cn(typographyVariants({ variant: "h2" }), "text-black")}
        >
          Technical Skills
        </CardTitle>
        <p
          className={cn(
            typographyVariants({ variant: "small" }),
            "text-gray-800",
          )}
        >
          Comprehensive full-stack expertise with AI integration and bilingual
          development
        </p>
      </CardHeader>
      <CardContent
        className={cn(
          paddingVariants({ size: "lg" }),
          "pt-0 space-y-4 flex-1 overflow-y-auto max-h-[600px]",
        )}
      >
        <section aria-labelledby="languages-heading">
          <h3
            id="languages-heading"
            className={cn(typographyVariants({ variant: "h4" }), "text-black")}
          >
            Languages
          </h3>
          <div
            className="w-full h-px bg-gray-300 my-3"
            role="separator"
            aria-hidden="true"
          />
          <div className="flex flex-wrap gap-2" role="list">
            {skills.languages.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20"
                role="listitem"
              >
                <span className="mr-2" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <section aria-labelledby="frontend-heading">
          <h3
            id="frontend-heading"
            className={cn(typographyVariants({ variant: "h4" }), "text-black")}
          >
            Frontend Development
          </h3>
          <div
            className="w-full h-px bg-gray-300 my-3"
            role="separator"
            aria-hidden="true"
          />
          <div className="flex flex-wrap gap-2" role="list">
            {skills.frontend.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20"
                role="listitem"
              >
                <span className="mr-2" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <section aria-labelledby="backend-heading">
          <h3
            id="backend-heading"
            className={cn(typographyVariants({ variant: "h4" }), "text-black")}
          >
            Backend Development
          </h3>
          <div
            className="w-full h-px bg-gray-300 my-3"
            role="separator"
            aria-hidden="true"
          />
          <div className="flex flex-wrap gap-2" role="list">
            {skills.backend.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20"
                role="listitem"
              >
                <span className="mr-2" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <section aria-labelledby="databases-heading">
          <h3
            id="databases-heading"
            className={cn(typographyVariants({ variant: "h4" }), "text-black")}
          >
            Databases & Storage
          </h3>
          <div
            className="w-full h-px bg-gray-300 my-3"
            role="separator"
            aria-hidden="true"
          />
          <div className="flex flex-wrap gap-2" role="list">
            {skills.databases.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20"
                role="listitem"
              >
                <span className="mr-2" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <section aria-labelledby="ai-heading">
          <h3
            id="ai-heading"
            className={cn(typographyVariants({ variant: "h4" }), "text-black")}
          >
            AI & Machine Learning
          </h3>
          <div
            className="w-full h-px bg-gray-300 my-3"
            role="separator"
            aria-hidden="true"
          />
          <div className="flex flex-wrap gap-2" role="list">
            {skills.ai.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20"
                role="listitem"
              >
                <span className="mr-2" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <section aria-labelledby="messaging-heading">
          <h3
            id="messaging-heading"
            className={cn(typographyVariants({ variant: "h4" }), "text-black")}
          >
            Messaging & Real-time
          </h3>
          <div
            className="w-full h-px bg-gray-300 my-3"
            role="separator"
            aria-hidden="true"
          />
          <div className="flex flex-wrap gap-2" role="list">
            {skills.messaging.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20"
                role="listitem"
              >
                <span className="mr-2" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <section aria-labelledby="i18n-heading">
          <h3
            id="i18n-heading"
            className={cn(typographyVariants({ variant: "h4" }), "text-black")}
          >
            Internationalization (i18n/l10n)
          </h3>
          <div
            className="w-full h-px bg-gray-300 my-3"
            role="separator"
            aria-hidden="true"
          />
          <div className="flex flex-wrap gap-2" role="list">
            {skills.i18n.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20"
                role="listitem"
              >
                <span className="mr-2" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <section aria-labelledby="crossplatform-heading">
          <h3
            id="crossplatform-heading"
            className={cn(typographyVariants({ variant: "h4" }), "text-black")}
          >
            Cross-Platform Development
          </h3>
          <div
            className="w-full h-px bg-gray-300 my-3"
            role="separator"
            aria-hidden="true"
          />
          <div className="flex flex-wrap gap-2" role="list">
            {skills.crossPlatform.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20"
                role="listitem"
              >
                <span className="mr-2" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <section aria-labelledby="devops-heading">
          <h3
            id="devops-heading"
            className={cn(typographyVariants({ variant: "h4" }), "text-black")}
          >
            DevOps & Deployment
          </h3>
          <div
            className="w-full h-px bg-gray-300 my-3"
            role="separator"
            aria-hidden="true"
          />
          <div className="flex flex-wrap gap-2" role="list">
            {skills.devops.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20"
                role="listitem"
              >
                <span className="mr-2" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <section aria-labelledby="testing-heading">
          <h3
            id="testing-heading"
            className={cn(typographyVariants({ variant: "h4" }), "text-black")}
          >
            Testing & Quality Assurance
          </h3>
          <div
            className="w-full h-px bg-gray-300 my-3"
            role="separator"
            aria-hidden="true"
          />
          <div className="flex flex-wrap gap-2" role="list">
            {skills.testing.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20"
                role="listitem"
              >
                <span className="mr-2" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
