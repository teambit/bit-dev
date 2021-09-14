import React from "react";
import { UseCaseCardGrid } from "@teambit/community.ui.use-case.use-case-card-grid";
import { UseCases } from "@teambit/community.entity.use-cases";
import { H2 } from "@teambit/design.ui.heading";
import { Link } from "@teambit/design.ui.navigation.link";
import { Icon } from "@teambit/design.elements.icon";
import styles from "./use-case-section.module.scss";

export type UseCaseSectionProps = {
  /**
   * An object of use cases with title and text and icon props
   */
  useCases: UseCases[];
  /**
   * Title of the use case section
   */
  title: string;
  /**
   * link text for the link to more use cases
   */
  linkText: string;
  /**
   * internal link to more use cases
   */
  href: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function UseCaseSection({
  useCases,
  title,
  href,
  linkText,
}: UseCaseSectionProps) {
  return (
    <div className={styles.useCaseSection}>
      <div className={styles.heading}>
        <H2 className={styles.title}>{title}</H2>
        <Link href={href}>{linkText}</Link>
        <Icon of="right-arrow" className={styles.icon} />
      </div>
      <UseCaseCardGrid useCases={useCases} />
    </div>
  );
}
