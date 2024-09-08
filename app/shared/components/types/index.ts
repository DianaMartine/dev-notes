export type GlobalProps = {
  children?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
};

export type ParagraphProps = GlobalProps & {
  size: "xsmall" | "small" | "medium" | "large";
};

export type HeadingProps = GlobalProps & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export type CaptionProps = GlobalProps & {
  size: "xsmall" | "small" | "medium" | "large";
};

export type HeaderProps = GlobalProps & {
  navLinks: {
    title: string;
    href: string;
  }[];
  socialLinks?: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
};

export type TopicsProps = GlobalProps & {
  topics: TopicProps[];
};

export type TopicProps = {
  title: string;
  subtitle?: string;
  description: string;
  beforeSlug?: string;
  slug?: string;
  icon?: string;
};

export type BreadcrumbProps = GlobalProps & {
  navLinks: MainBreadcrumbProps[];
};

export type MainBreadcrumbProps = {
  title: string;
  href: string;
  nested?: NestedBreadcrumbProps[];
};

export type NestedBreadcrumbProps = {
  title: string;
  href?: string;
  nested?: NestedBreadcrumbProps[];
};

export type PageInfoProps = GlobalProps & {
  title: string;
  description: string;
  subtitle?: string;
};
