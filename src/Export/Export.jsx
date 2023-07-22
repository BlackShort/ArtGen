import React from "react";
import { Typography, Button, Box, ImageListItem } from "@mui/material";

const Export = ({ exportedData }) => {
  const handleDownload = () => {
    const exportContent = document.getElementById("ExportContent").innerHTML;
    const fullHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Exported Webpage</title>
          <style>
          body {
            box-sizing: content-box;
            text-decoration: none;
            font-size: 1rem;
          }

          h6{
            margin: 0;
            font-family: "Roboto","Helvetica","Arial",sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.75;
            letter-spacing: 0.5px;
          }
        
          ::-webkit-scrollbar {
            width: 12px;
            height: 0;
          }
        
          ::-webkit-scrollbar-track {
            background: #252525;
          }
        
          ::-webkit-scrollbar-thumb {
            border-radius: 25px;
            background: gray;
            border: 2px solid transparent;
            background-clip: padding-box;
          }
        
          ::-webkit-scrollbar-thumb:hover {
            box-shadow: 10px;
            background: rgb(71, 71, 71);
            transition: 0.2s;
            border: 2px solid transparent;
            background-clip: padding-box;
          }</style
        ><style data-emotion="css-global" data-s="">
          @-webkit-keyframes mui-auto-fill {
            from {
              display: block;
            }
          }</style
        ><style data-emotion="css-global" data-s="">
          @keyframes mui-auto-fill {
            from {
              display: block;
            }
          }</style
        ><style data-emotion="css-global" data-s="">
          @-webkit-keyframes mui-auto-fill-cancel {
            from {
              display: block;
            }
          }</style
        ><style data-emotion="css-global" data-s="">
          @keyframes mui-auto-fill-cancel {
            from {
              display: block;
            }
          }</style
        ><style data-emotion="css-global" data-s="">
          @-webkit-keyframes mui-auto-fill {
            from {
              display: block;
            }
          }</style
        ><style data-emotion="css-global" data-s="">
          @keyframes mui-auto-fill {
            from {
              display: block;
            }
          }</style
        ><style data-emotion="css-global" data-s="">
          @-webkit-keyframes mui-auto-fill-cancel {
            from {
              display: block;
            }
          }</style
        ><style data-emotion="css-global" data-s="">
          @keyframes mui-auto-fill-cancel {
            from {
              display: block;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-16u1pqa-MuiStack-root {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            width: -webkit-fill-available;
          }</style
        ><style data-emotion="css" data-s="">
          .css-t80ocz-MuiStack-root {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            position: static;
            width: -webkit-fill-available;
            height: 7vh;
            background: #56585d;
            padding: 0.5em 1em;
            gap: 1em;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between;
          }</style
        ><style data-emotion="css" data-s="">
          .css-5lbw0b-MuiTypography-root {
            margin: 0;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            font-size: 2.125rem;
            line-height: 1.235;
            letter-spacing: 0.00735em;
          }</style
        ><style data-emotion="css" data-s="">
          .css-2s90m6-MuiAvatar-root {
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-flex-shrink: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-size: 1.25rem;
            line-height: 1;
            border-radius: 50%;
            overflow: hidden;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            color: #fff;
            background-color: #bdbdbd;
          }</style
        ><style data-emotion="css" data-s="">
          .css-q3afju-MuiStack-root {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            padding: 3% 3%;
            height: calc(100vh - (7vh + 6em));
          }</style
        ><style data-emotion="css" data-s="">
          .css-31fd7v {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            border: 2px solid gray;
            border-radius: 10px;
            height: 100%;
            overflow: hidden;
          }</style
        ><style data-emotion="css" data-s="">
          @media (min-width: 600px) {
            .css-31fd7v {
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
            }
          }</style
        ><style data-emotion="css" data-s="">
          @media (min-width: 900px) {
            .css-31fd7v {
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-1j2ocf0 {
            width: 45%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
          }</style
        ><style data-emotion="css" data-s="">
          .css-bbgv4h-MuiTypography-root {
            margin: 0;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 1.334;
            letter-spacing: 0em;
            border-bottom: 1px solid;
            border-color: gray;
            text-align: center;
            padding: 0.5em;
          }</style
        ><style data-emotion="css" data-s="">
          .css-12py5qn {
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            background-color: transparent;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            color: #ffffff;
            width: -webkit-fill-available;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1s6xzxn-MuiTabs-root {
            overflow: hidden;
            min-height: 48px;
            -webkit-overflow-scrolling: touch;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            width: 25%;
            border-right: 1px solid;
            border-color: gray;
            background-color: transparent;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1s6xzxn-MuiTabs-root .MuiTabs-scrollButtons {
          }</style
        ><style data-emotion="css" data-s="">
          @media (max-width: 599.95px) {
            .css-1s6xzxn-MuiTabs-root .MuiTabs-scrollButtons {
              display: none;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-1s6xzxn-MuiTabs-root .MuiTabs-scroller {
          }</style
        ><style data-emotion="css" data-s="">
          .css-1s6xzxn-MuiTabs-root .MuiTabs-scroller::-webkit-scrollbar {
            width: 8px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1s6xzxn-MuiTabs-root .MuiTabs-scroller::-webkit-scrollbar-thumb {
            background-color: #ffffff;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1s6xzxn-MuiTabs-root .MuiTab-root {
            color: #ffffff;
            text-transform: uppercase;
            -webkit-align-items: flex-start;
            -webkit-box-align: flex-start;
            -ms-flex-align: flex-start;
            align-items: flex-start;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1s6xzxn-MuiTabs-root .MuiTab-root.Mui-selected {
            color: #00fff5;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1s6xzxn-MuiTabs-root .MuiTab-root:not(.Mui-selected) {
            color: #ffffff;
          }</style
        ><style data-emotion="css" data-s="">
          .css-agdkjh-MuiTabs-scrollbarSize {
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-agdkjh-MuiTabs-scrollbarSize::-webkit-scrollbar {
            display: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1cgx7kx-MuiTabs-scroller {
            position: relative;
            display: inline-block;
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            white-space: nowrap;
            scrollbar-width: none;
            overflow-y: auto;
            overflow-x: hidden;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1cgx7kx-MuiTabs-scroller::-webkit-scrollbar {
            display: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-lfwcke-MuiTabs-flexContainer {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1tv0c3k-MuiTab-root {
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.25;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            max-width: 360px;
            min-width: 90px;
            position: relative;
            min-height: 48px;
            -webkit-flex-shrink: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            padding: 12px 16px;
            overflow: hidden;
            white-space: normal;
            text-align: center;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            color: rgba(0, 0, 0, 0.6);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1tv0c3k-MuiTab-root.Mui-selected {
            color: #1976d2;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1tv0c3k-MuiTab-root.Mui-disabled {
            color: rgba(0, 0, 0, 0.38);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
            display: -webkit-inline-box;
            display: -webkit-inline-flex;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            background-color: transparent;
            outline: 0;
            border: 0;
            margin: 0;
            border-radius: 0;
            padding: 0;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            vertical-align: middle;
            -moz-appearance: none;
            -webkit-appearance: none;
            -webkit-text-decoration: none;
            text-decoration: none;
            color: inherit;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.25;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            max-width: 360px;
            min-width: 90px;
            position: relative;
            min-height: 48px;
            -webkit-flex-shrink: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            padding: 12px 16px;
            overflow: hidden;
            white-space: normal;
            text-align: center;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            color: rgba(0, 0, 0, 0.6);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1h9z7r5-MuiButtonBase-root-MuiTab-root::-moz-focus-inner {
            border-style: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-disabled {
            pointer-events: none;
            cursor: default;
          }</style
        ><style data-emotion="css" data-s="">
          @media print {
            .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
            color: #1976d2;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-disabled {
            color: rgba(0, 0, 0, 0.38);
          }</style
        ><style data-emotion="css" data-s="">
          .css-10d9dml-MuiTabs-indicator {
            position: absolute;
            height: 100%;
            bottom: 0;
            width: 2px;
            -webkit-transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            background-color: #1976d2;
            right: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-19kzrtu {
            padding: 24px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1tloz07 {
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            gap: 2em;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1a4rlzt {
            gap: 8px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: start;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: start;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            width: -webkit-fill-available;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            padding: 0 0.5em;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1b2od8z-MuiFormLabel-root {
            color: rgba(0, 0, 0, 0.6);
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.4375em;
            letter-spacing: 0.00938em;
            padding: 0;
            position: relative;
            color: #fff;
            font-size: 1.2rem;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1b2od8z-MuiFormLabel-root.Mui-focused {
            color: #1976d2;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1b2od8z-MuiFormLabel-root.Mui-disabled {
            color: rgba(0, 0, 0, 0.38);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1b2od8z-MuiFormLabel-root.Mui-error {
            color: #d32f2f;
          }</style
        ><style data-emotion="css" data-s="">
          .css-15cjp49-MuiSelect-root {
            color: #fff;
            letter-spacing: 0.5px;
            border: 1px solid gray;
            width: -webkit-fill-available;
            height: 5vh;
            border-radius: 0.3em;
            font-size: 1rem;
            padding: 0.1em 1em;
          }</style
        ><style data-emotion="css" data-s="">
          .css-15cjp49-MuiSelect-root:focus {
            border: 1px solid black;
          }</style
        ><style data-emotion="css" data-s="">
          .css-15cjp49-MuiSelect-root .MuiSelect-icon {
            -webkit-transition: 0.2s;
            transition: 0.2s;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
          }</style
        ><style data-emotion="css" data-s="">
          .css-15cjp49-MuiSelect-root .MuiSelect-icon.Mui-expanded {
            -webkit-transform: rotate(-180deg);
            -moz-transform: rotate(-180deg);
            -ms-transform: rotate(-180deg);
            transform: rotate(-180deg);
          }</style
        ><style data-emotion="css" data-s="">
          .css-15cjp49-MuiSelect-root .MuiInputBase-root {
          }</style
        ><style data-emotion="css" data-s="">
          .css-15cjp49-MuiSelect-root .MuiInputBase-root:hover,
          .css-15cjp49-MuiSelect-root .MuiInputBase-root:after {
            background-color: transparent;
            color: #fff;
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.4375em;
            letter-spacing: 0.00938em;
            color: rgba(0, 0, 0, 0.87);
            box-sizing: border-box;
            position: relative;
            cursor: text;
            display: -webkit-inline-box;
            display: -webkit-inline-flex;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            border-radius: 4px;
            color: #fff;
            letter-spacing: 0.5px;
            border: 1px solid gray;
            width: -webkit-fill-available;
            height: 5vh;
            border-radius: 0.3em;
            font-size: 1rem;
            padding: 0.1em 1em;
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-disabled {
            color: rgba(0, 0, 0, 0.38);
            cursor: default;
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover
            .MuiOutlinedInput-notchedOutline {
            border-color: rgba(0, 0, 0, 0.87);
          }</style
        ><style data-emotion="css" data-s="">
          @media (hover: none) {
            .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover
              .MuiOutlinedInput-notchedOutline {
              border-color: rgba(0, 0, 0, 0.23);
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
            .MuiOutlinedInput-notchedOutline {
            border-color: #1976d2;
            border-width: 2px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-error
            .MuiOutlinedInput-notchedOutline {
            border-color: #d32f2f;
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-disabled
            .MuiOutlinedInput-notchedOutline {
            border-color: rgba(0, 0, 0, 0.26);
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:focus {
            border: 1px solid black;
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root
            .MuiSelect-icon {
            -webkit-transition: 0.2s;
            transition: 0.2s;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root
            .MuiSelect-icon.Mui-expanded {
            -webkit-transform: rotate(-180deg);
            -moz-transform: rotate(-180deg);
            -ms-transform: rotate(-180deg);
            transform: rotate(-180deg);
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root
            .MuiInputBase-root {
          }</style
        ><style data-emotion="css" data-s="">
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root
            .MuiInputBase-root:hover,
          .css-w7kk16-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root
            .MuiInputBase-root:after {
            background-color: transparent;
            color: #fff;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
            font: inherit;
            letter-spacing: inherit;
            color: currentColor;
            padding: 4px 0 5px;
            border: 0;
            box-sizing: content-box;
            background: none;
            height: 1.4375em;
            margin: 0;
            -webkit-tap-highlight-color: transparent;
            display: block;
            min-width: 0;
            width: 100%;
            -webkit-animation-name: mui-auto-fill-cancel;
            animation-name: mui-auto-fill-cancel;
            -webkit-animation-duration: 10ms;
            animation-duration: 10ms;
            padding: 16.5px 14px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input::-webkit-input-placeholder {
            color: currentColor;
            opacity: 0.42;
            -webkit-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input::-moz-placeholder {
            color: currentColor;
            opacity: 0.42;
            -webkit-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:-ms-input-placeholder {
            color: currentColor;
            opacity: 0.42;
            -webkit-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input::-ms-input-placeholder {
            color: currentColor;
            opacity: 0.42;
            -webkit-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus {
            outline: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:invalid {
            box-shadow: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input::-webkit-search-decoration {
            -webkit-appearance: none;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input::-webkit-input-placeholder {
            opacity: 0 !important;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input::-moz-placeholder {
            opacity: 0 !important;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:-ms-input-placeholder {
            opacity: 0 !important;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input::-ms-input-placeholder {
            opacity: 0 !important;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus::-webkit-input-placeholder {
            opacity: 0.42;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus::-moz-placeholder {
            opacity: 0.42;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus:-ms-input-placeholder {
            opacity: 0.42;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus::-ms-input-placeholder {
            opacity: 0.42;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled {
            opacity: 1;
            -webkit-text-fill-color: rgba(0, 0, 0, 0.38);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill {
            -webkit-animation-duration: 5000s;
            animation-duration: 5000s;
            -webkit-animation-name: mui-auto-fill;
            animation-name: mui-auto-fill;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill {
            border-radius: inherit;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill
            WebkitBoxShadow {
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill
            WebkitTextFillColor {
          }</style
        ><style data-emotion="css" data-s="">
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill
            caretColor {
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
            -moz-appearance: none;
            -webkit-appearance: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border-radius: 4px;
            cursor: pointer;
            font: inherit;
            letter-spacing: inherit;
            color: currentColor;
            padding: 4px 0 5px;
            border: 0;
            box-sizing: content-box;
            background: none;
            height: 1.4375em;
            margin: 0;
            -webkit-tap-highlight-color: transparent;
            display: block;
            min-width: 0;
            width: 100%;
            -webkit-animation-name: mui-auto-fill-cancel;
            animation-name: mui-auto-fill-cancel;
            -webkit-animation-duration: 10ms;
            animation-duration: 10ms;
            padding: 16.5px 14px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:focus {
            border-radius: 4px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input::-ms-expand {
            display: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled {
            cursor: default;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input[multiple] {
            height: auto;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:not(
              [multiple]
            )
            option,
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:not(
              [multiple]
            )
            optgroup {
            background-color: #fff;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
            padding-right: 32px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
            height: auto;
            min-height: 1.4375em;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input::-webkit-input-placeholder {
            color: currentColor;
            opacity: 0.42;
            -webkit-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input::-moz-placeholder {
            color: currentColor;
            opacity: 0.42;
            -webkit-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:-ms-input-placeholder {
            color: currentColor;
            opacity: 0.42;
            -webkit-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input::-ms-input-placeholder {
            color: currentColor;
            opacity: 0.42;
            -webkit-transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:focus {
            outline: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:invalid {
            box-shadow: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input::-webkit-search-decoration {
            -webkit-appearance: none;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input::-webkit-input-placeholder {
            opacity: 0 !important;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input::-moz-placeholder {
            opacity: 0 !important;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:-ms-input-placeholder {
            opacity: 0 !important;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input::-ms-input-placeholder {
            opacity: 0 !important;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:focus::-webkit-input-placeholder {
            opacity: 0.42;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:focus::-moz-placeholder {
            opacity: 0.42;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:focus:-ms-input-placeholder {
            opacity: 0.42;
          }</style
        ><style data-emotion="css" data-s="">
          label[data-shrink="false"]
            + .MuiInputBase-formControl
            .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:focus::-ms-input-placeholder {
            opacity: 0.42;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled {
            opacity: 1;
            -webkit-text-fill-color: rgba(0, 0, 0, 0.38);
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill {
            -webkit-animation-duration: 5000s;
            animation-duration: 5000s;
            -webkit-animation-name: mui-auto-fill;
            animation-name: mui-auto-fill;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill {
            border-radius: inherit;
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill
            WebkitBoxShadow {
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill
            WebkitTextFillColor {
          }</style
        ><style data-emotion="css" data-s="">
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill
            caretColor {
          }</style
        ><style data-emotion="css" data-s="">
          .css-yf8vq0-MuiSelect-nativeInput {
            bottom: 0;
            left: 0;
            position: absolute;
            opacity: 0;
            pointer-events: none;
            width: 100%;
            box-sizing: border-box;
          }</style
        ><style data-emotion="css" data-s="">
          .css-3qbkez-MuiSelect-icon {
            position: absolute;
            right: 7px;
            top: calc(50% - 0.5em);
            pointer-events: none;
            color: rgba(0, 0, 0, 0.54);
          }</style
        ><style data-emotion="css" data-s="">
          .css-3qbkez-MuiSelect-icon.Mui-disabled {
            color: rgba(0, 0, 0, 0.26);
          }</style
        ><style data-emotion="css" data-s="">
          .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            width: 1em;
            height: 1em;
            display: inline-block;
            fill: currentColor;
            -webkit-flex-shrink: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            font-size: 1.5rem;
            position: absolute;
            right: 7px;
            top: calc(50% - 0.5em);
            pointer-events: none;
            color: rgba(0, 0, 0, 0.54);
          }</style
        ><style data-emotion="css" data-s="">
          .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon.Mui-disabled {
            color: rgba(0, 0, 0, 0.26);
          }</style
        ><style data-emotion="css" data-s="">
          .css-oouctw-MuiMenu-root {
          }</style
        ><style data-emotion="css" data-s="">
          .css-bclbye-MuiPopover-root-MuiMenu-root {
          }</style
        ><style data-emotion="css" data-s="">
          .css-rki20w-MuiOutlinedInput-notchedOutline {
            border-color: rgba(0, 0, 0, 0.23);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
            text-align: left;
            position: absolute;
            bottom: 0;
            right: 0;
            top: -5px;
            left: 0;
            margin: 0;
            padding: 0 8px;
            pointer-events: none;
            border-radius: inherit;
            border-style: solid;
            border-width: 1px;
            overflow: hidden;
            min-width: 0%;
            border-color: rgba(0, 0, 0, 0.23);
          }</style
        ><style data-emotion="css" data-s="">
          .css-ihdtdm {
            float: unset;
            width: auto;
            overflow: hidden;
            padding: 0;
            line-height: 11px;
            -webkit-transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
          }</style
        ><style data-emotion="css" data-s="">
          .css-gg4vpm {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between;
          }</style
        ><style data-emotion="css" data-s="">
          .css-2whykm-MuiButton-root {
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.75;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            min-width: 64px;
            padding: 6px 16px;
            border-radius: 4px;
            -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            color: #fff;
            background-color: #d32f2f;
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-2whykm-MuiButton-root:hover {
            -webkit-text-decoration: none;
            text-decoration: none;
            background-color: #c62828;
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
              0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          @media (hover: none) {
            .css-2whykm-MuiButton-root:hover {
              background-color: #d32f2f;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-2whykm-MuiButton-root:active {
            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
              0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-2whykm-MuiButton-root.Mui-focusVisible {
            box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
              0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-2whykm-MuiButton-root.Mui-disabled {
            color: rgba(0, 0, 0, 0.26);
            box-shadow: none;
            background-color: rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1sszw6i-MuiButtonBase-root-MuiButton-root {
            display: -webkit-inline-box;
            display: -webkit-inline-flex;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            background-color: transparent;
            outline: 0;
            border: 0;
            margin: 0;
            border-radius: 0;
            padding: 0;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            vertical-align: middle;
            -moz-appearance: none;
            -webkit-appearance: none;
            -webkit-text-decoration: none;
            text-decoration: none;
            color: inherit;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.75;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            min-width: 64px;
            padding: 6px 16px;
            border-radius: 4px;
            -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            color: #fff;
            background-color: #d32f2f;
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1sszw6i-MuiButtonBase-root-MuiButton-root::-moz-focus-inner {
            border-style: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1sszw6i-MuiButtonBase-root-MuiButton-root.Mui-disabled {
            pointer-events: none;
            cursor: default;
          }</style
        ><style data-emotion="css" data-s="">
          @media print {
            .css-1sszw6i-MuiButtonBase-root-MuiButton-root {
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-1sszw6i-MuiButtonBase-root-MuiButton-root:hover {
            -webkit-text-decoration: none;
            text-decoration: none;
            background-color: #c62828;
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
              0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          @media (hover: none) {
            .css-1sszw6i-MuiButtonBase-root-MuiButton-root:hover {
              background-color: #d32f2f;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-1sszw6i-MuiButtonBase-root-MuiButton-root:active {
            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
              0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1sszw6i-MuiButtonBase-root-MuiButton-root.Mui-focusVisible {
            box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
              0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1sszw6i-MuiButtonBase-root-MuiButton-root.Mui-disabled {
            color: rgba(0, 0, 0, 0.26);
            box-shadow: none;
            background-color: rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1yu95zv-MuiButton-root {
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.75;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            min-width: 64px;
            padding: 6px 16px;
            border-radius: 4px;
            -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            color: #fff;
            background-color: #1976d2;
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1yu95zv-MuiButton-root:hover {
            -webkit-text-decoration: none;
            text-decoration: none;
            background-color: #1565c0;
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
              0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          @media (hover: none) {
            .css-1yu95zv-MuiButton-root:hover {
              background-color: #1976d2;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-1yu95zv-MuiButton-root:active {
            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
              0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1yu95zv-MuiButton-root.Mui-focusVisible {
            box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
              0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1yu95zv-MuiButton-root.Mui-disabled {
            color: rgba(0, 0, 0, 0.26);
            box-shadow: none;
            background-color: rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-sghohy-MuiButtonBase-root-MuiButton-root {
            display: -webkit-inline-box;
            display: -webkit-inline-flex;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            background-color: transparent;
            outline: 0;
            border: 0;
            margin: 0;
            border-radius: 0;
            padding: 0;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            vertical-align: middle;
            -moz-appearance: none;
            -webkit-appearance: none;
            -webkit-text-decoration: none;
            text-decoration: none;
            color: inherit;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.75;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            min-width: 64px;
            padding: 6px 16px;
            border-radius: 4px;
            -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            color: #fff;
            background-color: #1976d2;
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-sghohy-MuiButtonBase-root-MuiButton-root::-moz-focus-inner {
            border-style: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-sghohy-MuiButtonBase-root-MuiButton-root.Mui-disabled {
            pointer-events: none;
            cursor: default;
          }</style
        ><style data-emotion="css" data-s="">
          @media print {
            .css-sghohy-MuiButtonBase-root-MuiButton-root {
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-sghohy-MuiButtonBase-root-MuiButton-root:hover {
            -webkit-text-decoration: none;
            text-decoration: none;
            background-color: #1565c0;
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
              0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          @media (hover: none) {
            .css-sghohy-MuiButtonBase-root-MuiButton-root:hover {
              background-color: #1976d2;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-sghohy-MuiButtonBase-root-MuiButton-root:active {
            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
              0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-sghohy-MuiButtonBase-root-MuiButton-root.Mui-focusVisible {
            box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
              0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-sghohy-MuiButtonBase-root-MuiButton-root.Mui-disabled {
            color: rgba(0, 0, 0, 0.26);
            box-shadow: none;
            background-color: rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-1mni4bh-MuiStack-root {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            width: -webkit-fill-available;
            gap: 1em;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1vcl93u-MuiStack-root {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
          }</style
        ><style data-emotion="css" data-s="">
          .css-16uiy5d-MuiTypography-root {
            margin: 0;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 1.334;
            letter-spacing: 0em;
            color: #c3c3c3;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-8je8zh-MuiTouchRipple-root {
            overflow: hidden;
            pointer-events: none;
            position: absolute;
            z-index: 0;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: inherit;
          }</style
        ><style data-emotion="css" data-s="">
          .css-y4cjyz-MuiTouchRipple-ripple {
            opacity: 0;
            position: absolute;
          }</style
        ><style data-emotion="css" data-s="">
          .css-y4cjyz-MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible {
            opacity: 0.3;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            -webkit-animation-name: animation-1taevns;
            animation-name: animation-1taevns;
            -webkit-animation-duration: 550ms;
            animation-duration: 550ms;
            -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }</style
        ><style data-emotion="css" data-s="">
          .css-y4cjyz-MuiTouchRipple-ripple.MuiTouchRipple-ripplePulsate {
            -webkit-animation-duration: 200ms;
            animation-duration: 200ms;
          }</style
        ><style data-emotion="css" data-s="">
          .css-y4cjyz-MuiTouchRipple-ripple .MuiTouchRipple-child {
            opacity: 1;
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: currentColor;
          }</style
        ><style data-emotion="css" data-s="">
          .css-y4cjyz-MuiTouchRipple-ripple .MuiTouchRipple-childLeaving {
            opacity: 0;
            -webkit-animation-name: animation-5ich1p;
            animation-name: animation-5ich1p;
            -webkit-animation-duration: 550ms;
            animation-duration: 550ms;
            -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }</style
        ><style data-emotion="css" data-s="">
          .css-y4cjyz-MuiTouchRipple-ripple .MuiTouchRipple-childPulsate {
            position: absolute;
            left: 0px;
            top: 0;
            -webkit-animation-name: animation-f6tr5a;
            animation-name: animation-f6tr5a;
            -webkit-animation-duration: 2500ms;
            animation-duration: 2500ms;
            -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-delay: 200ms;
            animation-delay: 200ms;
          }</style
        ><style data-emotion="css" data-s="">
          @-webkit-keyframes animation-f6tr5a {
            0% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
            }
            50% {
              -webkit-transform: scale(0.92);
              -moz-transform: scale(0.92);
              -ms-transform: scale(0.92);
              transform: scale(0.92);
            }
            100% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
            }
          }</style
        ><style data-emotion="css" data-s="">
          @keyframes animation-f6tr5a {
            0% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
            }
            50% {
              -webkit-transform: scale(0.92);
              -moz-transform: scale(0.92);
              -ms-transform: scale(0.92);
              transform: scale(0.92);
            }
            100% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
            }
          }</style
        ><style data-emotion="css" data-s="">
          @-webkit-keyframes animation-5ich1p {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }</style
        ><style data-emotion="css" data-s="">
          @keyframes animation-5ich1p {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }</style
        ><style data-emotion="css" data-s="">
          @-webkit-keyframes animation-1taevns {
            0% {
              -webkit-transform: scale(0);
              -moz-transform: scale(0);
              -ms-transform: scale(0);
              transform: scale(0);
              opacity: 0.1;
            }
            100% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
              opacity: 0.3;
            }
          }</style
        ><style data-emotion="css" data-s="">
          @keyframes animation-1taevns {
            0% {
              -webkit-transform: scale(0);
              -moz-transform: scale(0);
              -ms-transform: scale(0);
              transform: scale(0);
              opacity: 0.1;
            }
            100% {
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
              opacity: 0.3;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-biid3x {
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            position: relative;
          }</style
        ><style data-emotion="css" data-s="">
          .css-gepadz-MuiTypography-root {
            margin: 0;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            font-size: 3rem;
            line-height: 1.167;
            letter-spacing: 0em;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1aidlfc {
            width: -webkit-fill-available;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: absolute;
            bottom: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-18ykajv {
            width: -webkit-fill-available;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: fixed;
            bottom: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-ev3nth {
            width: -webkit-fill-available;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: fixed;
            bottom: 2em;
          }</style
        ><style data-emotion="css" data-s="">
          .css-cy0546 {
            width: -webkit-fill-available;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: -webkit-sticky;
            position: sticky;
            bottom: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-10q54uo-MuiSelect-icon {
            position: absolute;
            right: 7px;
            top: calc(50% - 0.5em);
            pointer-events: none;
            color: rgba(0, 0, 0, 0.54);
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
          }</style
        ><style data-emotion="css" data-s="">
          .css-10q54uo-MuiSelect-icon.Mui-disabled {
            color: rgba(0, 0, 0, 0.26);
          }</style
        ><style data-emotion="css" data-s="">
          .css-bpeome-MuiSvgIcon-root-MuiSelect-icon {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            width: 1em;
            height: 1em;
            display: inline-block;
            fill: currentColor;
            -webkit-flex-shrink: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            font-size: 1.5rem;
            position: absolute;
            right: 7px;
            top: calc(50% - 0.5em);
            pointer-events: none;
            color: rgba(0, 0, 0, 0.54);
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
          }</style
        ><style data-emotion="css" data-s="">
          .css-bpeome-MuiSvgIcon-root-MuiSelect-icon.Mui-disabled {
            color: rgba(0, 0, 0, 0.26);
          }</style
        ><style data-emotion="css" data-s="">
          .css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root {
            position: fixed;
            z-index: 1300;
            right: 0;
            bottom: 0;
            top: 0;
            left: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1rfr5hw-MuiModal-backdrop {
            z-index: -1;
          }</style
        ><style data-emotion="css" data-s="">
          .css-g3hgs1-MuiBackdrop-root-MuiModal-backdrop {
            position: fixed;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            right: 0;
            bottom: 0;
            top: 0;
            left: 0;
            background-color: transparent;
            -webkit-tap-highlight-color: transparent;
            z-index: -1;
          }</style
        ><style data-emotion="css" data-s="">
          .css-1wki0l6-MuiPopover-paper-MuiMenu-paper {
            position: absolute;
            overflow-y: auto;
            overflow-x: hidden;
            min-width: 16px;
            min-height: 16px;
            max-width: calc(100% - 32px);
            max-height: calc(100% - 32px);
            outline: 0;
            max-height: calc(100% - 96px);
            -webkit-overflow-scrolling: touch;
          }</style
        ><style data-emotion="css" data-s="">
          .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
            background-color: #fff;
            color: rgba(0, 0, 0, 0.87);
            -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            border-radius: 4px;
            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
              0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
            position: absolute;
            overflow-y: auto;
            overflow-x: hidden;
            min-width: 16px;
            min-height: 16px;
            max-width: calc(100% - 32px);
            max-height: calc(100% - 32px);
            outline: 0;
            max-height: calc(100% - 96px);
            -webkit-overflow-scrolling: touch;
          }</style
        ><style data-emotion="css" data-s="">
          .css-rpp6kk-MuiMenu-list {
            outline: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-6hp17o-MuiList-root-MuiMenu-list {
            list-style: none;
            margin: 0;
            padding: 0;
            position: relative;
            padding-top: 8px;
            padding-bottom: 8px;
            outline: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root {
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5;
            letter-spacing: 0.00938em;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            -webkit-text-decoration: none;
            text-decoration: none;
            min-height: 48px;
            padding-top: 6px;
            padding-bottom: 6px;
            box-sizing: border-box;
            white-space: nowrap;
            padding-left: 16px;
            padding-right: 16px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root:hover {
            -webkit-text-decoration: none;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.04);
          }</style
        ><style data-emotion="css" data-s="">
          @media (hover: none) {
            .css-ov3z8l-MuiMenuItem-root:hover {
              background-color: transparent;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root.Mui-selected {
            background-color: rgba(25, 118, 210, 0.08);
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root.Mui-selected.Mui-focusVisible {
            background-color: rgba(25, 118, 210, 0.2);
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root.Mui-selected:hover {
            background-color: rgba(25, 118, 210, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          @media (hover: none) {
            .css-ov3z8l-MuiMenuItem-root.Mui-selected:hover {
              background-color: rgba(25, 118, 210, 0.08);
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root.Mui-focusVisible {
            background-color: rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root.Mui-disabled {
            opacity: 0.38;
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root + .MuiDivider-root {
            margin-top: 8px;
            margin-bottom: 8px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root + .MuiDivider-inset {
            margin-left: 52px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root .MuiListItemText-root {
            margin-top: 0;
            margin-bottom: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root .MuiListItemText-inset {
            padding-left: 36px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-ov3z8l-MuiMenuItem-root .MuiListItemIcon-root {
            min-width: 36px;
          }</style
        ><style data-emotion="css" data-s="">
          @media (min-width: 600px) {
            .css-ov3z8l-MuiMenuItem-root {
              min-height: auto;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root {
            display: -webkit-inline-box;
            display: -webkit-inline-flex;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            background-color: transparent;
            outline: 0;
            border: 0;
            margin: 0;
            border-radius: 0;
            padding: 0;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            vertical-align: middle;
            -moz-appearance: none;
            -webkit-appearance: none;
            -webkit-text-decoration: none;
            text-decoration: none;
            color: inherit;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5;
            letter-spacing: 0.00938em;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            -webkit-text-decoration: none;
            text-decoration: none;
            min-height: 48px;
            padding-top: 6px;
            padding-bottom: 6px;
            box-sizing: border-box;
            white-space: nowrap;
            padding-left: 16px;
            padding-right: 16px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root::-moz-focus-inner {
            border-style: none;
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-disabled {
            pointer-events: none;
            cursor: default;
          }</style
        ><style data-emotion="css" data-s="">
          @media print {
            .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root {
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:hover {
            -webkit-text-decoration: none;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.04);
          }</style
        ><style data-emotion="css" data-s="">
          @media (hover: none) {
            .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:hover {
              background-color: transparent;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
            background-color: rgba(25, 118, 210, 0.08);
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected.Mui-focusVisible {
            background-color: rgba(25, 118, 210, 0.2);
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected:hover {
            background-color: rgba(25, 118, 210, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          @media (hover: none) {
            .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected:hover {
              background-color: rgba(25, 118, 210, 0.08);
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-focusVisible {
            background-color: rgba(0, 0, 0, 0.12);
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-disabled {
            opacity: 0.38;
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root + .MuiDivider-root {
            margin-top: 8px;
            margin-bottom: 8px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root + .MuiDivider-inset {
            margin-left: 52px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root .MuiListItemText-root {
            margin-top: 0;
            margin-bottom: 0;
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root .MuiListItemText-inset {
            padding-left: 36px;
          }</style
        ><style data-emotion="css" data-s="">
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root .MuiListItemIcon-root {
            min-width: 36px;
          }</style
        ><style data-emotion="css" data-s="">
          @media (min-width: 600px) {
            .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root {
              min-height: auto;
            }
          }</style
        ><style data-emotion="css" data-s="">
          .css-ag7rrr-MuiTypography-root {
            margin: 0;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 1.334;
            letter-spacing: 0em;
          }
        </style>
        
        </head>
        <body>
          ${exportContent}
        </body>
      </html>
    `;


    const blob = new Blob([fullHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Output.html";
    a.click();
    URL.revokeObjectURL(url);
  };


  return (
    <Box width={'-webkit-fill-available'} height={'-webkit-fill-available'} position={'relative'} sx={{ padding: '0.5em 0.2em 0 0', }}>
      <div id="ExportContent"
        style={{
          display:'flex',
          flexDirection:'column',
          gap:'1em',
          overflowY: "scroll",
          height: 'calc(100% - (2em))',
          padding: '1em 2em 0.5em 2em'
        }}>
        {exportedData.map((data, index) => (
          <div key={index}>
            {data.heading && <Typography variant={data.hType}>{data.heading}</Typography>}
            {data.label && <Button color={data.color} variant={data.variant}>{data.label}</Button>}
            {data.imageUrl &&
              <ImageListItem sx={{ width: 300, height: 200, borderRadius: '0.3em', overflow: 'hidden' }}>
                <img
                  src={`${data.imageUrl}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${data.imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={data.altText}
                  loading="lazy"
                />
              </ImageListItem>}
            {data.linkText && <a href={data.linkUrl}>{data.linkText}</a>}
            {data.paragraph && <Typography variant="subtitle1">{data.paragraph}</Typography>}

          </div>
        ))}
      </div>
      <Box width={'-webkit-fill-available'} height={'max'} sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: '0.5em' }}>
        <Button variant="contained" color="primary" onClick={handleDownload}>
          Download
        </Button>
      </Box>

    </Box>
  );
};

export default Export;
