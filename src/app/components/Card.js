import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
  import Image from "next/image";
  
  export default function BookingCard({ imageSrc, title, rating, description, amenities ,handleOnClick}) {
    return (
      <Card className="max-w-[26rem] shadow-lg bg-gradient-to-tr from-cyan-700 to-gray-600/100 mx-auto">
        <CardHeader floated={false} color="blue-gray">
          <Image src={imageSrc} alt={title} width={500} // Add the width property
                        height={256} />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
            {/* Red icon */}
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between text-black ">
            <Typography variant="h5" color="blue-gray" className="font-medium text-black">
              {title}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              {/* Rating icon and text */}
            </Typography>
          </div>
          <Typography color="gray" className="text-black font-light text-lg overflow-hidden h-14">
            {description}
          </Typography>
          <div className="group mt-8 flex flex-wrap items-center justify-center  gap-3">
            {amenities.map((amenity, index) => (
              <Tooltip key={index} content={amenity}>
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-500/85 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  {amenity}
                </span>
              </Tooltip>
            ))}
          </div>
        </CardBody>
        <CardFooter className="pt-3">
          <Button size="lg" fullWidth={true} onClick={handleOnClick}>
            Reserve
          </Button>
        </CardFooter>
      </Card>
    );
  }
  