import { useState } from "react";

export function getTruncatedString(str, num) {
  if (str?.length < num) {
    return str;
  } else {
    return str.slice(0, num) + "...";
  }
}

export function getTruncatedStringFromArray(arr, num) {
  const cuisineString = arr.reduce((acc, cur, i, arr) => {
    return acc + ", " + cur;
  });

  if (cuisineString.length < num) {
    return cuisineString;
  } else {
    return cuisineString.slice(0, num) + "...";
  }
}

export const getStringFromArray = (array) => {
  let string = "";
  array.forEach((item, index) => {
    if (index === 0) {
      string = item;
    } else {
      string += ", " + item;
    }
  });
  return string;
};

export const getOpeningStatus = () => {
  // Get the current time
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  // Check if current time is between 10 AM (10) and 11 PM (23)
  if (currentHour >= 10 && currentHour < 23) {
    return "Open now";
  } else {
    return "Closed";
  }
};

export const TruncateText = ({ text, maxLength = 80 }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const renderText = () => {
    if (isTruncated) {
      return (
        <>
          {text.slice(0, maxLength)}
          {text.length > maxLength && (
            <span
              onClick={toggleTruncate}
              style={{ color: "blue", cursor: "pointer" }}
            >
              ...read more
            </span>
          )}
        </>
      );
    }
    return <span>{text}</span>;
  };

  return <span>{renderText()}</span>;
};
