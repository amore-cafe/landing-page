<script>
  import Carousel from "@lib/components/ui/carousel/carousel.svelte";
  import CarouselContent from "@lib/components/ui/carousel/carousel-content.svelte";
  import CarouselItem from "@lib/components/ui/carousel/carousel-item.svelte";
  import CarouselPrevious from "@lib/components/ui/carousel/carousel-previous.svelte";
  import CarouselNext from "@lib/components/ui/carousel/carousel-next.svelte";
  import Card from "@lib/components/ui/card/card.svelte";
  import CardContent from "@lib/components/ui/card/card-content.svelte";

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
</script>

<Carousel class="flex w-screen md:w-auto px-4 md:px-0">
  <CarouselContent class="flex flex-col gap-4 md:flex-row h-max">
    {#each testimonials as testimonial}
      <CarouselItem class="md:basis-1/3">
        <div class="testimonial-card md:min-w-48">
          <div
            class="testimonial-content flex flex-col justify-between h-full py-4"
          >
            <p class="text-lg font-bold font-inter mb-4 w-full text-wrap">
              "{testimonial.text}"
            </p>
            <span class="font-bold text-[#996365]">— {testimonial.author}</span>
          </div>
        </div></CarouselItem
      >
    {/each}
  </CarouselContent>
  <div>
    <CarouselPrevious
      class="bg-accent text-dark-accent border-2 font-bold hidden md:inline"
    />
    <CarouselNext
      class="bg-accent text-dark-accent border-2 font-bold hidden md:inline"
    />
  </div>
</Carousel>

<style>
  .testimonial-card {
    min-height: 16rem;
    padding: 1rem;
    border: 1px solid #996365;
    border-radius: 1rem;
  }
</style>
