import { cn } from "@/lib/utils";
import React from "react";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const H1 = React.forwardRef<HTMLHeadingElement, HeaderProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <h1
                ref={ref}
                className={cn(
                    'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
                    className
                )}
                {...props}
            >
                {children}
            </h1>
        );
    }
)
H1.displayName = 'H1';


export const H2 = React.forwardRef<HTMLHeadingElement, HeaderProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <h2
                ref={ref}
                className={cn(
                    'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
                    className
                )}
                {...props}
            >
                {children}
            </h2>
        );
    }
)
H2.displayName = 'H2';

export const H3 = React.forwardRef<HTMLHeadingElement, HeaderProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <h3
                ref={ref}
                className={cn(
                    'scroll-m-20 text-2xl font-semibold tracking-tight',
                    className
                )}
                {...props}
            >
                {children}
            </h3>
        );
    }
)
H3.displayName = 'H3';

export const H4 = React.forwardRef<HTMLHeadingElement, HeaderProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <h4
                ref={ref}
                className={cn(
                    'scroll-m-20 text-xl font-semibold tracking-tight',
                    className
                )}
                {...props}
            >
                {children}
            </h4>
        );
    }
)
H4.displayName = 'H4';

export const Text = React.forwardRef<HTMLParagraphElement, React.HtmlHTMLAttributes<HTMLParagraphElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className={cn(
                    'leading-7 [&:not(:first-child)]:mt-1',
                    className
                )}
                {...props}
            >
                {children}
            </p>
        );
    }
)
Text.displayName = 'Text';


export const LargeText = React.forwardRef<HTMLParagraphElement, React.HtmlHTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className={cn(
                    'text-lg font-semibold',
                    className
                )}
                {...props}
            >
                {children}
            </p>
        );
    }
)
LargeText.displayName = 'LargeText';

export const SmallText = React.forwardRef<HTMLParagraphElement, React.HtmlHTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <small
                ref={ref}
                className={cn(
                    'text-sm font-medium leading-none',
                    className
                )}
                {...props}
            >
                {children}
            </small>
        );
    }
)
SmallText.displayName = 'SmallText';

export const MuteText = React.forwardRef<HTMLParagraphElement, React.HtmlHTMLAttributes<HTMLParagraphElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className={cn(
                    'text-sm text-muted-foreground',
                    className
                )}
                {...props}
            >
                {children}
            </p>
        );
    }
)
MuteText.displayName = 'MuteText';