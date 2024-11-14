import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  imagesPartOne: ImageProps[];
  imagesPartTwo: ImageProps[];
};

const imageColumns = [
  { className: "-mt-[20%] animate-loop-vertically-top" },
  { className: "-mt-[50%] animate-loop-vertically-bottom" },
  { className: "animate-loop-vertically-top" },
  { className: "mt-[-30%] animate-loop-vertically-bottom" },
  { className: "mt-[-20%] animate-loop-vertically-top" },
];

export type Header79Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header79 = (props: Header79Props) => {
  const { heading, description, buttons, imagesPartOne, imagesPartTwo } = {
    ...Header79Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative">
      <div className="px-[5%]">
        <div className="flex max-h-[60rem] min-h-svh items-center">
          <div className="container py-16 md:py-24 lg:py-28">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                {heading}
              </h1>
              <p className="text-text-alternative md:text-md">{description}</p>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-black/50" />
            <div className="grid w-full grid-cols-2 gap-x-4 px-4 md:grid-cols-3 lg:grid-cols-5">
              {imageColumns.map((column, index) => (
                <AnimatedImageColumn
                  key={index}
                  imagesPartOne={imagesPartOne}
                  imagesPartTwo={imagesPartTwo}
                  className={column.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header79;

const ImageGrid = ({ images }: { images: ImageProps[] }) => (
  <React.Fragment>
    {images.map((image, index) => (
      <div key={index} className="grid size-full grid-cols-1 gap-4">
        <div className="relative w-full pt-[120%]">
          <img
            className="absolute inset-0 size-full object-cover"
            src={image.src}
            alt={image.alt}
          />
        </div>
      </div>
    ))}
  </React.Fragment>
);

const AnimatedImageColumn = ({
  imagesPartOne,
  imagesPartTwo,
  className,
}: {
  imagesPartOne: ImageProps[];
  imagesPartTwo: ImageProps[];
  className: string;
}) => (
  <div className={`grid size-full columns-2 grid-cols-1 gap-4 self-center ${className}`}>
    <ImageGrid images={imagesPartOne} />
    <ImageGrid images={imagesPartTwo} />
  </div>
);

export const Header79Defaults: Header79Props = {
  heading: "NOUS CONSTRUISONS DES EXPÉRIENCES DIGITALES",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
  imagesPartOne: [
    {
      src: "/images/slider/1.jpg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "/images/slider/9.jpg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "/images/slider/3.jpg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "/images/slider/11.jpg",
      alt: "Relume placeholder image 1",
    },
  ],
  imagesPartTwo: [
    {
      src: "/images/slider/2.jpg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "/images/slider/10.jpg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "/images/slider/4.jpg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "/images/slider/122.jpg",
      alt: "Relume placeholder image 1",
    },
  ],
};
