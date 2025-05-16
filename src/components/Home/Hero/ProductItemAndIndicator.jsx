
import { motion, AnimatePresence } from "framer-motion";


const ProductItemAndIndicator = ({ products, activeIndex }) => {
  return (
    <div className="flex gap-8 items-center justify-center">
      {/* Product Items */}
      <div className="flex flex-col items-center h-[300px] w-48 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ y: 100, opacity: 0 }}
            animate={activeIndex === 1 ? { y: 0, opacity: 1 } : activeIndex > 1 ? { y: -100, opacity: 1 } : { y: 100, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2 items-center absolute"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex gap-1 items-center h-24 w-48 px-3 py-3 rounded-2xl transition-all duration-500 ${index === activeIndex
                  ? "bg-white shadow-lg"
                  : index > activeIndex
                    ? "blur-[2px] bg-gradient-to-t from-[#00C853] to-[#3CDA7E]"
                    : "blur-[2px] bg-gradient-to-b from-[#00C853] to-[#3CDA7E]"
                  }`}
              >
                {index === activeIndex && (
                  <>
                    <div>
                      <img
                        src={products[index].imageName}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    {/* <img src={productImage} alt="" /> */}
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-Poppins font-[500] text-[#000]">
                        {product.model}
                      </h2>
                      <p className="text-md text-[#A7A7A7]">{product.name}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator */}
      <div className="flex flex-col gap-2">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-6 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-black h-12" : "bg-white"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductItemAndIndicator;
