import React from "react";
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'
import {ButtonsType} from "../../Types/FGCTypes";


const BtnMixins = css<{ size: string, variant: string, href?: string, isAnimating: boolean, width: string }>`
  align-items: center;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-weight: 500;
  justify-content: center;
  margin: 0;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  //width: fit-content;
  width: ${props => props.width ? props.width : "fit-content" };;
  padding-inline: ${props => props.size === "small" ? "0.5rem" : "1rem"};
  background-color: ${props => props.variant === "primary" ? props.theme.Primary.Aegean : props.variant === "secondary" ? props.theme.Primary.White : "transparent"};
  height: ${props => props.size === "small" ? "1.625rem" : props.size === "medium" ? "2.25rem" : "3rem"};
  border-radius: ${props => props.size === "small" ? "0.25rem" : "0.5rem"};
  border: 1px solid ${props => props.variant === "primary" || props.variant === "secondary" ? props.theme.Border.Border_1 : "transparent"};
  color: ${props => props.variant === "primary" ? props.theme.Primary.White : props.variant === "secondary" ? props.theme.Primary.Aegean : props.variant === "link" ? props.theme.Primary.Link : props.theme.Primary.Aegean};
  font-size: ${props => props.size === "small" ? "12px" : props.size === "medium" ? "14px" : "15px"};
  line-height: ${props => props.size === "small" ? "18px" : "22px"};
  padding: 0px 20px;
  &:not(:disabled) {
    box-shadow: ${props => props.variant === "primary" ? "0px 2px 0px rgba(0, 0, 0, 0.043)" : props.variant === "secondary" ? "0px 2px 0px rgba(0, 0, 0, 0.016);" : "none"};
  }

  &:hover {
    background-color: ${props => props.isAnimating ? "" : props.variant === "primary" ? props.theme.Shades.Aegean[500] : props.variant === "secondary" ? props.theme.Primary.White : props.variant === "text" ? props.theme.Background[1] : "transparent"};
    color: ${props => props.variant === "link" ? props.theme.Link.Hover : ""};
    border: ${props => props.isAnimating ? "" : props.variant === "secondary" ? `1px solid ${props.theme.Shades.Aegean[400]}` : ""};
  }

  &:active, &:focus {
    background-color: ${props => props.isAnimating ? "" : props.variant === "primary" ? '#003252' : props.variant === "secondary" ? props.theme.Primary.White : "transparent"};
    color: ${props => props.isAnimating ? "" : props.variant === "link" ? props.theme.Link.Active : props.variant === "text" || props.variant === "secondary" ? props.theme.Shades.Aegean[700] : ""};
    border: ${props => props.isAnimating ? "" : props.variant === "secondary" ? `1px solid ${props.theme.Shades.Aegean[400]}` : ""};
  }

  &:disabled, &.disabled {
    background-color: ${props => props.variant === "primary" || props.variant === "secondary" ? props.theme.Primary.Disabled : "transparent"};
    //border: 1px solid ${props => props.variant === "primary" || props.variant === "secondary" ? props.theme.Border.Border_1 : "transparent"};
    cursor: not-allowed;
    //color: ${props => props.theme.Content.Black} !important;
    border-radius: 6px;
    border: 1px solid var(--border-light-border-1, rgba(16, 24, 32, 0.15));
    background: var(--background-light-1, rgba(16, 24, 32, 0.04));
    color: var(--content-light-disabled, rgba(16, 24, 32, 0.25));


  }


  ${props => props.isAnimating && css`
    cursor: progress !important;

    &::before {
      content: "";
      position: absolute;
      height: calc(100% + 8px);
      width: calc(100% + 8px);
      background-color: #F0F5FF;
      z-index: -1;
      border-radius: 8px;

  `}
  & svg {

    & path {
      fill: ${props => props.variant === "primary" ? props.theme.Primary.White : props.variant === "secondary" ? props.theme.Primary.Aegean : props.variant === "link" ? props.theme.Primary.Link : props.theme.Primary.Aegean} !important;
      stroke: ${props => props.variant === "primary" ? props.theme.Primary.White : props.variant === "secondary" ? props.theme.Primary.Aegean : props.variant === "link" ? props.theme.Primary.Link : props.theme.Primary.Aegean} !important;
    }

    margin-inline-start: 0.5rem !important;
  }
`
const Btn = styled.button`
  ${BtnMixins};
`
const Lnk = styled(Link)`
  ${BtnMixins};
`


const Button = ({
                    type,
                    className,
                    id,
                    variant = 'primary',
                    children,
                    size = "medium",
                    width = "fit-content",
                    disabled = false,
                    href = "#",
                    isAnimating = false,
                    onClickLogic,
                    ...rest
                }: ButtonsType): JSX.Element => {


    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (disabled) {
            e.preventDefault();
        }
    }

    const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (disabled || isAnimating) return;
        onClickLogic ? onClickLogic(e) : null
    }

    return (
        <>
            {variant === "link" ? (
                <Lnk isAnimating={isAnimating} onClick={handleLinkClick} href={isAnimating || disabled ? "" : href}
                     size={size} width={width} variant={variant} className={`${disabled ? "disabled" : ""} ${className}`}
                     id={id} {...rest}>
                    {isAnimating ? "Loading..." : children}
                </Lnk>
            ) : (
                <Btn isAnimating={isAnimating} width={width} type={isAnimating ? "button" : type} size={size} variant={variant}
                     className={className} id={id}
                     disabled={disabled} onClick={handleBtnClick} {...rest}>
                    {isAnimating ? "Loading..." : children}
                </Btn>
            )}
        </>
    );
};

export default Button;