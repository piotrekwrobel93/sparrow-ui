import React from "react";
import SrButton from ".";
import { Meta } from '@storybook/react/types-6-0'
import { Box } from "@material-ui/core";

const BUTTON_CONTAINER_WIDTH = 300

export default {
    title: "Components/Button",
    component: SrButton,
} as Meta



export const PrimaryButton = () => {
    return (
        <Box maxWidth={BUTTON_CONTAINER_WIDTH}> 
            <SrButton variant="outlined">Sparrow Button</SrButton>
        </Box>
    ) 
}