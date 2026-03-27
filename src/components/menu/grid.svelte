<script>
  import Accordion from "@lib/components/ui/accordion/accordion.svelte";
  import AccordionItem from "@lib/components/ui/accordion/accordion-item.svelte";
  import AccordionTrigger from "@lib/components/ui/accordion/accordion-trigger.svelte";
  import AccordionContent from "@lib/components/ui/accordion/accordion-content.svelte";
  import { menu } from "@data/menu.json";
</script>

<Accordion
  class={`menu-grid-container w-full p-4 px-2 md:p-8 bg-accent h-max overflow-y-scroll`}
  type="single"
  value="0"
>
  {#each menu as MenuItem, index}
    <AccordionItem
      class="menu-section flex flex-col items-start gap-0 w-full border-b hover:italic"
      value={index}
    >
      <div class="w-full hover:underline">
        <AccordionTrigger
          class="section-header flex p-4 items-center justify-between gap-4 w-full bg-accent font-agrandir text-3xl font-light text-left"
        >
          {MenuItem.section}
        </AccordionTrigger>
      </div>

      <AccordionContent
        class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm px-6 md:px-8"
      >
        {#each MenuItem.items as item}
          <div
            class="menu-item flex w-full md:px-4 py-2 justify-between items-between border-b first:border-t last:border-b-0 not-italic hover:italic"
          >
            <div class="item-details flex-1 flex flex-col items-start">
              <div
                class="item-name text-black font-agrandir text-2xl font-bold tracking-wider"
              >
                {item.name}
              </div>
              <div
                class="item-description w-[20ch] md:w-auto text-black font-agrandir text-base font-light leading-normal not-italic truncate hover:whitespace-normal"
              >
                {item.description}
              </div>
            </div>
            <div
              class="item-price text-black font-agrandir text-3xl font-light leading-normal"
            >
              ₹{item.price}
            </div>
          </div>
        {/each}
      </AccordionContent>
    </AccordionItem>
  {/each}
</Accordion>
