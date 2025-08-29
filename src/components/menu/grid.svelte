<script>
  import "@styles/global.css";
  import { Accordion } from "bits-ui";
  import CaretDown from "phosphor-svelte/lib/CaretDown";
  import { menu } from "@data/menu.json";

  let { class: customClass = "" } = $props();
</script>

<Accordion.Root
  class={`menu-grid-container w-full p-8 bg-accent ${customClass}`}
  type="single"
>
  {#each menu as MenuItem, index}
    <Accordion.Item
      class="menu-section flex flex-col items-start gap-0 w-full border-b hover:italic"
      value={index}
    >
      <Accordion.Header class="w-full hover:underline">
        <Accordion.Trigger
          class="section-header flex p-4 items-center justify-between gap-4 w-full bg-accent font-agrandir text-3xl font-light"
        >
          {MenuItem.section}
          <CaretDown class="size-4 transition-transform duration-200" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm w-full px-8"
      >
        {#each MenuItem.items as item}
          <div
            class="menu-item flex w-full px-4 p-2 justify-between items-center border-b border-b-black last:border-b-0 not-italic hover:italic"
          >
            <div class="item-details flex-1 flex flex-col items-start">
              <div
                class="item-name text-black font-agrandir text-2xl font-bold tracking-wider"
              >
                {item.name}
              </div>
              <div
                class="item-description text-black font-agrandir text-base font-light leading-normal not-italic"
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
      </Accordion.Content>
    </Accordion.Item>
  {/each}
</Accordion.Root>
