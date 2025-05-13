import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Icon } from "@iconify/react";

const Testimonials = () => {
  const [maxAvatars, setMaxAvatars] = React.useState(3);

  // Function to handle screen size changes
  const handleResize = () => {
    const width = window.innerWidth;
    if (width > 1440) {
      setMaxAvatars(5); // For desktop screens (lg)
    }

    else if (width >= 1024) {
      setMaxAvatars(4); // For tablets (md)
    } else {
      setMaxAvatars(2); // For small screens (sm)
    }
  };

  // Set the initial max avatars and update on screen resize
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="hidden md:flex flex-col gap-2 items-start lg:w-50 xl:w-55 2xl:w-70 w-27 md:w-43 ">
      <AvatarGroup
        max={maxAvatars}
        slotProps={{
          additionalAvatar: {
            sx: {
              width: { md: 30, lg: 40, xl: 50, sm: 20 },
              height: { md: 30, lg: 40, xl: 50, sm: 20 },
            },
          },
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{
            width: { md: 30, lg: 40, xl: 50 },
            height: { md: 30, lg: 40, xl: 50 },
          }}
        />
        <Avatar
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
          sx={{
            width: { md: 30, lg: 40, xl: 50 },
            height: { md: 30, lg: 40, xl: 50 },
          }}
        />
        <Avatar
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
          sx={{
            width: { md: 30, lg: 40, xl: 50 },
            height: { md: 30, lg: 40, xl: 50 },
          }}
        />
        <Avatar
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
          sx={{
            width: { md: 30, lg: 40, xl: 50 },
            height: { md: 30, lg: 40, xl: 50 },
          }}
        />
        <Avatar
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
          sx={{
            width: { md: 30, lg: 40, xl: 50 },
            height: { md: 30, lg: 40, xl: 50 },
          }}
        />
        <Avatar
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
          sx={{
            width: { md: 30, lg: 40, xl: 50 },
            height: { md: 30, lg: 40, xl: 50 },
          }}
        />
      </AvatarGroup>
      <p className="text-[#44444] text-xs md:text-sm lg:text-base font-Poppins 2xl:text-xl">
        10k Positive reviews achieved{" "}
        <span>
          <Icon
            icon="material-symbols:star"

            color="#F78C11"
            inline={true}
            className="inline-block size-3 md:size-6"
          />
          <Icon
            icon="material-symbols:star"

            color="#F78C11"
            inline={true}
            className="inline-block size-3 md:size-6"
          />
          <Icon
            icon="material-symbols:star"

            color="#F78C11"
            inline={true}
            className="inline-block size-3 md:size-6"
          />
          <Icon
            icon="material-symbols:star"

            color="#F78C11"
            inline={true}
            className="inline-block size-3 md:size-6"
          />
        </span>
      </p>
    </div>
  );
};

export default Testimonials;
