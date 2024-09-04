// import React, { forwardRef } from "react";
// import type { CardProps } from "../types";
// import { Heading } from "../typo/heading/heading";
// import { Paragraph } from "../typo/paragraph/paragraph";
// import { ImageComponent } from "../image-component/image-component";
// import clsx from "clsx";

// export const Card = forwardRef<HTMLDivElement, CardProps>(
//     ({
//         children,
//         title,
//         subtitle,
//         avatar,
//         avatarOptions,
//         format = "flat",
//         size = "medium",
//         hover = false,
//         bgColor = "white",
//         textColor = "black",
//     }, _ref) => {
//         return (
//             <div
//                 ref={_ref}
//                 className={clsx(
//                     "flex flex-col items-start p-4",
//                     {
//                         // format
//                         "rounded-lg": format === "rounded",
//                         "rounded-none": format === "flat",

//                         // size
//                         "w-32 h-32": size === "small",
//                         "w-48 h-48": size === "medium",
//                         "w-64 h-64": size === "large",

//                         // hover
//                         "hover:scale-105 transition-transform duration-300 ease-in-out": hover,
//                     }
//                 )}
//                 style={{
//                     backgroundColor: bgColor,
//                     color: textColor,
//                 }}
//             >
//                 {avatar && (
//                     <div className="w-fit h-fit">
//                         <ImageComponent
//                             src={avatar}
//                             alt={avatarOptions?.alt || "avatar"}
//                             format={avatarOptions?.format || "badge"}
//                             size={avatarOptions?.size || "small"}
//                         />
//                     </div>
//                 )}
//                 <div id="content" className={clsx(
//                     "flex flex-col",
//                     {
//                         "mt-[-1rem]": avatar,
//                     }
//                 )}>
//                     {title && (
//                         <Heading level={6} textColor={textColor}>
//                             {title}
//                         </Heading>
//                     )}
//                     {subtitle && (
//                         <Paragraph size="xsmall" textColor={textColor}>
//                             {subtitle}
//                         </Paragraph>
//                     )}
//                     {children}
//                 </div>
//             </div>
//         );
//     }
// ) as React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;