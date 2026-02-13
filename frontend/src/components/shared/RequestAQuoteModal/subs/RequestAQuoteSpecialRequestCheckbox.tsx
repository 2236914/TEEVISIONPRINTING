// import React from 'react';

// import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';

// type PropTypes = {
//   formData: RequestAQuoteModalFormData;
//   name: 'hasSpecialRequest';
//   setFormData: React.Dispatch<React.SetStateAction<RequestAQuoteModalFormData>>;
// };

// const RequestAQuoteSpecialRequestCheckbox: React.FC<PropTypes> = ({
//   formData,
//   setFormData,
//   name,
// }) => {
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [name]: event.target.checked });
//   };

//   return (
//     <div className="form-control">
//       {/* <label className="flex gap-2 justify-start items-start label cursor-pointer">
//         <input
//           type="checkbox"
//           className="checkbox mt-[0.1rem]"
//           checked={formData[name]}
//           onChange={handleChange}
//         />
//         <div className="flex flex-col gap-2">
//           <span className="label-text font-bold text-sm">
//             Tick this box if you have a special request
//           </span>
//           <div className="flex flex-col gap-2">
//             <span className="label-text text-xs text-subLabelColor">
//               You might be one of these people:
//             </span>
//             <div className="flex gap-4 flex-wrap">
//               <ul className="list-disc list-inside text-xs text-subLabelColor">
//                 <li>I want to get quote for more than 1 product</li>
//                 <li>I have more than 1 design</li>
//                 <li>
//                   I am looking for a specific product that is not available on
//                   the website
//                 </li>
//                 <li>I want to talk with the sales representative</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </label> */}
//     </div>
//   );
// };

// export default RequestAQuoteSpecialRequestCheckbox;
