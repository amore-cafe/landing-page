<script lang="ts">
  import Carousel from "@lib/components/ui/carousel/carousel.svelte";
  import CarouselContent from "@lib/components/ui/carousel/carousel-content.svelte";
  import CarouselItem from "@lib/components/ui/carousel/carousel-item.svelte";
  import CarouselPrevious from "@lib/components/ui/carousel/carousel-previous.svelte";
  import CarouselNext from "@lib/components/ui/carousel/carousel-next.svelte";

  import type { CarouselAPI } from "@lib/components/ui/carousel/context.js";

  let api = $state<CarouselAPI>();

  const count = $derived(api ? api.scrollSnapList().length : 0);
  let current = $state(0);

  $effect(() => {
    if (api) {
      current = api.selectedScrollSnap() + 1;
      api.on("select", () => {
        current = api!.selectedScrollSnap() + 1;
      });
    }
  });

  const testimonials = [
    {
      text: "The ambience is perfect for catching up with friends. The coffee is always fresh and delicious!",
      author: "Priya S.",
    },
    {
      text: "Amore Cafe is my go-to spot for work and relaxation. The staff is super friendly!",
      author: "Rahul K.",
    },
    {
      text: "Love the desserts and cozy vibe. Highly recommend for anyone in town!",
      author: "Sneha T.",
    },
    {
      text: "The pastries are out of this world! I always leave with a smile.",
      author: "Aman G.",
    },
    {
      text: "A hidden gem! The decor is beautiful and the drinks are amazing.",
      author: "Fatima Z.",
    },
    {
      text: "Perfect spot for a date or solo time. The staff always remembers my order!",
      author: "Neha M.",
    },
  ];

  let screensize: "sm" | "md" = $state("sm");

  $effect(() => {
    if (window.innerWidth >= 768) {
      screensize = "md";
    }
  });
</script>

{#if screensize === "md"}
  <Carousel
    setApi={(emblaApi) => (api = emblaApi)}
    class="flex flex-col w-auto px-0 cursor-grab"
    opts={{
      align: "start",
    }}
  >
    <CarouselContent class="flex gap-4 flex-row h-max">
      {#each testimonials as testimonial}
        <CarouselItem class="md:basis-1/3">
          <div class="testimonial-card md:min-w-48 border border-dark-accent">
            <div
              class="testimonial-content flex flex-col justify-between h-full py-4"
            >
              <p class="text-lg font-bold font-inter mb-4 w-full text-wrap">
                "{testimonial.text}"
              </p>
              <span class="font-bold text-dark-accent"
                >— {testimonial.author}</span
              >
            </div>
          </div></CarouselItem
        >
      {/each}
    </CarouselContent>
    <div class="text-muted-foreground py-2 text-center text-sm">
      {current} of {count}
    </div>
  </Carousel>
{:else}
  <Carousel
    setApi={(emblaApi) => (api = emblaApi)}
    orientation="vertical"
    opts={{
      align: "start",
    }}
  >
    <CarouselContent class="h-96">
      {#each testimonials as testimonial}
        <CarouselItem class="basis-1/2">
          <div
            class="testimonial-card flex flex-col justify-around py-4 bg-dark-accent"
          >
            <p class="text-lg font-inter mb-4 w-full text-wrap text-white">
              "{testimonial.text}"
            </p>
            <span class="text-accent">— {testimonial.author}</span>
          </div>
        </CarouselItem>
      {/each}
    </CarouselContent>
    <div class="text-muted-foreground py-2 text-center text-sm">
      {current} of {count}
    </div>
  </Carousel>
{/if}

<style>
  .testimonial-card {
    min-height: 16rem;
    padding: 1rem;
    border-radius: 1rem;
  }
</style>
