import React from "react";

const Card = () => {
  return (
    <div>
      <article class="overflow-hidden rounded-xl shadow transition hover:shadow-xl mb-5 text-white">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="h-56 w-full object-cover"
        />

        <div class="bg-[#192942] p-4 sm:p-6">
          <time datetime="2022-10-10" class="block text-xs text-slate-500 ">
            {" "}
            10th Oct 2022{" "}
          </time>

          <a href="#">
            <h3 class="mt-0.5 text-lg ">
              How to position your furniture for positivity
            </h3>
          </a>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-slate-300 font-sans ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
    </div>
  );
};

export default Card;
