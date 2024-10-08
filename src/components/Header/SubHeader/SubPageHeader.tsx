import Image from "next/image";
import React from "react";
import TextArea from "../../TextArea/TextArea";

interface SubHeaderProps {
  name: string;
  nativeName: string;
  alternativeName?: string[];
  age: string;
  image: string;
  gender: string;
  month: number;
  day: number;
  bloodType: string;
  hometown?: string;
  yearsActive?: number[];
  description: string;
}

const SubPageHeader = ({
  name,
  nativeName,
  alternativeName,
  age,
  image,
  gender,
  month,
  day,
  bloodType,
  hometown,
  yearsActive,
  description,
}: SubHeaderProps) => {
  return (
    <div>
      <div className=" pb-[30px] pt-[20px] text-[#9FADB3]  ">
        <div className="max-w-[1200px]  hidden m-8 md:flex md:items-start lg:mx-10 2xl:mx-auto">
          <Image
            width={300}
            height={300}
            quality={100}
            src={image}
            alt="Anime-Image"
            style={{ height: "auto", width: "230px", objectFit: "cover" }}
            priority={true}
            className="rounded-md "
            data-testid="desktop-version"
          />
          <div className="my-4 mx-8">
            <h2 className="text-[#ADC0D2] text-3xl font-bold py-2">{name}</h2>
            <p
              className="md:text-sm lg:text-sm"
              data-testid="nativeName-desktop"
            >
              {nativeName && nativeName + ", "}
              {alternativeName ? alternativeName.join(", ") : ""}
            </p>

            <div className="my-8">
              {month || day ? (
                <h4 data-testid="desktop-birthday">
                  Birthday: {month + "/" + day}
                </h4>
              ) : (
                ""
              )}

              {age ? <h4 data-testid="desktop-age">Age: {age}</h4> : ""}

              {gender ? (
                <h4 data-testid="desktop-gender">Gender: {gender} </h4>
              ) : (
                ""
              )}

              {yearsActive
                ? yearsActive.map((yearActive, index) => (
                    <h4 key={index}>Years active: {yearActive}</h4>
                  ))
                : ""}
              {hometown ? (
                <h4 data-testid="desktop-hometown">Hometown: {hometown} </h4>
              ) : (
                ""
              )}
              {bloodType ? (
                <h4 data-testid="desktop-bloodType">Blood Type: {bloodType}</h4>
              ) : (
                ""
              )}
              <TextArea>{description}</TextArea>
            </div>
          </div>
        </div>

        <div className="text-center px-4 md:hidden  ">
          <h2 className="text-[#ADC0D2] text-2xl font-bold py-2">{name}</h2>
          <p data-testid="nativeName-mobile">
            {nativeName ? nativeName + ", " : ""}
            {alternativeName ? alternativeName.join(", ") : ""}
          </p>
          <div className="flex justify-center p-4  my-8">
            <Image
              width={130}
              height={130}
              src={image}
              alt="Anime-Image"
              style={{ height: "auto", width: "230px", objectFit: "cover" }}
              priority={true}
              className="rounded-md "
              data-testid="mobile-version"
            />
          </div>
          <div className="text-start mx-4">
            {month || day ? (
              <h4 data-testid="mobile-birthday">
                Birthday: {month + "/" + day}
              </h4>
            ) : (
              ""
            )}
            {age ? <h4 data-testid="mobile-age">Age: {age}</h4> : ""}
            {gender ? (
              <h4 data-testid="mobile-gender">Gender: {gender} </h4>
            ) : (
              ""
            )}
            {yearsActive
              ? yearsActive.map((yearActive, index) => (
                  <h4 key={index}>Years active: {yearActive}</h4>
                ))
              : ""}
            {hometown ? (
              <h4 data-testid="mobile-hometown">Hometown: {hometown} </h4>
            ) : (
              ""
            )}
            {bloodType ? (
              <h4 data-testid="mobile-bloodType">Blood Type: {bloodType}</h4>
            ) : (
              ""
            )}

            <TextArea>{description}</TextArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPageHeader;
