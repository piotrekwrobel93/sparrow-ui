import { ButtonProps } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React from "react";
import { themeCfg } from '../../cfg'


const BUTTON_CONTAINER_WIDTH = 300
const EASE = themeCfg.defaultTransition

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    width: "100%",
    minWidth: 160,
    maxWidth: 400,
    background: theme.colors.white,
    transition: EASE,
    "&:hover": {
        background: theme.colors.greyDark,
        color: theme.colors.white
    },
    "& ::placeholder": {
      color: "black",
      opacity: 0.8,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.colors.grey,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.colors.grey,
    },
  },
}));

export interface IProps extends ButtonProps {
    children : React.ReactNode
}

const SrButton: React.FunctionComponent<IProps> = ({
    children,
  ...rest
}) => {
  const classes = useStyles();
  return <Button className={classes.input} {...rest}>
      {children}
  </Button>;
};



export default SrButton 