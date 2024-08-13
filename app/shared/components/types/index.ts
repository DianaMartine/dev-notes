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

export type CardProps = GlobalProps & {
    title: string;
    subtitle: string;
    avatar?: string;
    avatarOptions?: AvatarOptions;
    format: 'flat' | 'rounded';
    size?: 'small' | 'medium' | 'large';
    hover?: boolean;
};

type AvatarOptions = {
    size: 'small' | 'medium' | 'large';
    format: 'flat' | 'rounded' | 'circle' | 'badge';
    alt: string;
    filter?: 'invert' | 'none';
    fit?: 'cover' | 'contain';
};

export type ImageComponentProps = {
    src: string;
    alt: string;
    format?: 'flat' | 'rounded' | 'circle' | 'badge';
    size?: 'small' | 'medium' | 'large';
    filter?: 'invert' | 'none';
    fit?: 'cover' | 'contain';
};

export type TopicProps = {
    topic: {
        title: string;
        subtitle: string;
        description: string;
        icon: string;
    };
};

export type FooterProps = GlobalProps & {
    children?: React.ReactNode;
};

export type LinkProps = {
    href: string;
    children: React.ReactNode;
    target?: '_blank';
};

export type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    format: 'flat' | 'rounded';
    size: 'small' | 'medium' | 'large';
};

export type HamburgerProps = {
    onClick: () => void;
};