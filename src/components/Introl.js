import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import thay from "../assets/imgs/thay.jpg";

const Introl = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div>
      <div className="animations" id="img">
        <div className="img-student">
          <img src={thay} alt="" width={200} />
        </div>
        {animation && (
          <TypeAnimation
            sequence={[
              `Lời đầu tiên, em không biết nói gì hơn ngoài bày tỏ sự biết ơn sâu sắc đến thầy.\nTrong suốt chặng đường học tập và làm đề tài em đã luôn nhận được sự hướng dẫn, giúp đỡ tận tình của thầy.\nEm xin bày tỏ sự kính trọng và lòng biết ơn sâu sắc nhất đến thầy giáo hướng dẫn ………….., thầy là\nngười đã trực tiếp hướng dẫn, giúp đỡ cho chúng em để chúng có thể hoàn thành đề tài này. Trong quá trình học tập và\nnghiên cứu, nếu em có những sai sót gì, kính mong thầy bỏ qua cho em!\nEm xin kính chúc thầy luôn luôn khỏe mạnh và ngày một thành công hơn trên con đường giảng dạy của mình..\nThank you!!!`,
              2000,
              "bien",
            ]}
            speed={50}
            style={{ whiteSpace: "pre-line", fontSize: "2em" }}
            className="animation"
            repeat={Infinity}
          />
        )}
      </div>
    </div>
  );
};

export default Introl;
