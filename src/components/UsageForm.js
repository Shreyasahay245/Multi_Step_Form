import React, { useContext } from "react";
import classes from "./css/Form.module.css";
import {CakeIcon, ChatIcon, TrendingUpIcon, PlusIcon, BriefcaseIcon, EmojiHappyIcon} from "@heroicons/react/solid";
import FormContext from "../store/form-context";

function UsageForm() {
  const usage = [
    {
      id: "1",
      icon: <ChatIcon className={classes.icon} />,
      title: "Speech and Communication",
      desc: "Difficulty in speaking, stutters, stammers...",
    },
    {
      id: "2",
      icon: < CakeIcon className={classes.icon} />,
      title: "Food and Nutrition",
      desc: "Underweight child, food allergies, picky eater...",
    },
    {
      id: "3",
      icon: < TrendingUpIcon className={classes.icon} />,
      title: "Developmental Issues",
      desc: "Premature birth, ADHD, Autism...",
    },
    {
    id: "4",
    icon: <  PlusIcon className={classes.icon} />,
    title: "Skin, Allergies, Sleep etc",
    desc: "Rashes, acne, distrubed sleep, dry skin...",
    },
    {
      id: "5",
      icon: <  BriefcaseIcon  className={classes.icon} />,
      title: "Gross Motor and Movement",
      desc: "Crawling, walking, jumping, catching..",
    },
    {
      id: "5",
      icon: <  EmojiHappyIcon className={classes.icon} />,
      title: "Behavior and Social",
      desc: "Cries a lot, tantrums, pinches, bites...",
    },
  ];

  const { setFormData, formData, setValidation } = useContext(FormContext);

  const insertUsage = (id) => {
    setFormData((prevData) => ({ ...prevData, usage: id }));
    setValidation((prevData) => ({ ...prevData, usage: true }));
  };

  return (
    <>
      <span className={`${classes.container} ${classes.headings}`}>
        <h1>Alice needs help with ...</h1>
      </span>

      <div className={classes.container_row}>
        {usage.map((item) => (
          <div
            key={item.id}
            className={`${classes.useCard} ${
              formData.usage === item.id ? classes.active : ""
            }`}
            onClick={() => insertUsage(item.id)}
          >
            {item.icon}
            <h4 className={classes.title}>{item.title}</h4>
            <p className={classes.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UsageForm;
