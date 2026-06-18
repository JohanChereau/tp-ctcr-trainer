import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

import type { OralExamSection } from "../types"

type OralExamSectionAccordionProps = {
  section: OralExamSection
}

export function OralExamSectionAccordion({
  section,
}: OralExamSectionAccordionProps) {
  return (
    <Accordion type="multiple">
      <AccordionItem
        value={section.title}
        className="overflow-hidden rounded-xl border bg-card"
      >
        <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
          {section.title}
        </AccordionTrigger>

        <AccordionContent className="px-6 pb-6">
          <div className="space-y-4">
            {section.markdown && (
              <article className="prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h4 className="mb-3 text-base font-semibold">
                        {children}
                      </h4>
                    ),

                    h2: ({ children }) => (
                      <h5 className="mb-2 text-sm font-semibold">{children}</h5>
                    ),

                    h3: ({ children }) => (
                      <h6 className="text-sm font-medium">{children}</h6>
                    ),
                  }}
                >
                  {section.markdown}
                </ReactMarkdown>
              </article>
            )}

            {section.children?.map((child) => (
              <Accordion key={child.title} type="multiple">
                <AccordionItem
                  value={child.title}
                  className="overflow-hidden rounded-lg border bg-muted/20"
                >
                  <AccordionTrigger className="px-4 py-4 text-left font-medium hover:no-underline">
                    {child.title}
                  </AccordionTrigger>

                  <AccordionContent className="px-4 pb-4">
                    {child.markdown && (
                      <article className="prose prose-sm max-w-none dark:prose-invert">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            h1: ({ children }) => (
                              <h4 className="mb-3 text-base font-semibold">
                                {children}
                              </h4>
                            ),

                            h2: ({ children }) => (
                              <h5 className="mb-2 text-sm font-semibold">
                                {children}
                              </h5>
                            ),
                          }}
                        >
                          {child.markdown}
                        </ReactMarkdown>
                      </article>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
