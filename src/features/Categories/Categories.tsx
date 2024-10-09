import { useRestuarantStore } from "@shared/stores/Restuarant";
import { Flex, Typography } from "antd";
import styles from "./styles.module.css";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { useEffect, useState } from "react";

export const Categories = () => {
  const restuarant = useRestuarantStore((state) => state.restuarant);
  const [activeCategory, setActiveCategory] = useState("");

  const onClickCategory = (id: string | undefined) => {
    if (id) {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    restuarant?.MenuCategories?.forEach((category) => {
      const section = document.getElementById(category?.id ?? "");

      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveCategory(category?.id ?? "");
            }
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
          }
        );

        observer.observe(section);
        return () => {
          observer.unobserve(section);
        };
      }
    });
  }, [restuarant?.MenuCategories]);

  return (
    <div
      className={styles.categoriesListContainer}
      onScroll={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Flex className={styles.categoriesList} gap="5px">
        {restuarant?.MenuCategories?.map((category) => (
          <CustomButton
            key={category?.id}
            className={styles.category}
            variant={
              activeCategory === category?.id ? "primary" : "transparent"
            }
            onClick={() => onClickCategory(category?.id)}
            label={<Typography.Text>{category?.name}</Typography.Text>}
          />
        ))}
      </Flex>
    </div>
  );
};
