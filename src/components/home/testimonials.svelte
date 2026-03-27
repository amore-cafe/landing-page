<script lang="ts">
  import Carousel from "@lib/components/ui/carousel/carousel.svelte";
  import CarouselContent from "@lib/components/ui/carousel/carousel-content.svelte";
  import CarouselItem from "@lib/components/ui/carousel/carousel-item.svelte";
  import CarouselPrevious from "@lib/components/ui/carousel/carousel-previous.svelte";
  import CarouselNext from "@lib/components/ui/carousel/carousel-next.svelte";

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
    class="flex flex-col w-auto px-0 cursor-grab"
    opts={{
      align: "start",
    }}
  >
    <CarouselContent class="flex gap-4 flex-row h-max">
      {#each testimonials as testimonial}
        <CarouselItem class="basis-1/4">
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
  </Carousel>
{:else}
  <Carousel
    orientation="vertical"
    opts={{
      align: "start",
    }}
  >
    <CarouselContent class="h-[80vh]">
      {#each testimonials as testimonial}
        <CarouselItem class="basis-1/2">
          <div
            class="testimonial-card flex flex-col justify-around py-4 bg-dark-accent"
          >
            <p class="text-lg font-inter mb-4 text-wrap text-white">
              "{testimonial.text}"
            </p>
            <span class="text-accent">— {testimonial.author}</span>
          </div>
        </CarouselItem>
      {/each}
    </CarouselContent>
  </Carousel>
{/if}

<style>
  .testimonial-card {
    min-height: 16rem;
    padding: 1rem;
    border-radius: 1rem;
  }
</style>
