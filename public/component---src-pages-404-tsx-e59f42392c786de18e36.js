(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"i6+/":function(n,t,e){"use strict";e.r(t);var a=e("q1tI"),r=e("MUpH");function o(){var n=Object(r.a)(["\n  &.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n  }\n\n  body {\n    background-color: white;\n    overflow: hidden;\n  }\n\n  .error404page {\n    width: 400px;\n    height: 800px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .body404,\n  .head404,\n  .eyes404,\n  .leftarm404,\n  .rightarm404,\n  .chair404,\n  .leftshoe404,\n  .rightshoe404,\n  .legs404,\n  .laptop404 {\n    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/15979/404-character-new.png)\n      0 0 no-repeat;\n    width: 200px;\n    height: 200px;\n  }\n\n  .newcharacter404,\n  .torso404,\n  .body404,\n  .head404,\n  .eyes404,\n  .leftarm404,\n  .rightarm404,\n  .chair404,\n  .leftshoe404,\n  .rightshoe404,\n  .legs404,\n  .laptop404 {\n    background-size: 750px;\n    position: absolute;\n    display: block;\n  }\n\n  .newcharacter404 {\n    width: 400px;\n    height: 800px;\n    left: 50%;\n    top: 20px;\n    margin-left: -200px;\n  }\n\n  $swayspeed: 20s;\n\n  .torso404 {\n    position: absolute;\n    display: block;\n    top: 138px;\n    left: 0px;\n    width: 389px;\n    height: 252px;\n    animation: sway $swayspeed ease infinite;\n    transform-origin: 50% 100%;\n  }\n\n  .body404 {\n    position: absolute;\n    display: block;\n    top: 0px;\n    left: 0px;\n    width: 389px;\n    height: 253px;\n  }\n\n  .head404 {\n    position: absolute;\n    top: -148px;\n    left: 106px;\n    width: 160px;\n    height: 194px;\n    background-position: 0px -265px;\n    transform-origin: 50% 85%;\n    animation: headTilt $swayspeed ease infinite;\n  }\n\n  .eyes404 {\n    position: absolute;\n    top: 92px;\n    left: 34px;\n    width: 73px;\n    height: 18px;\n    background-position: -162px -350px;\n    animation: blink404 10s steps(1) infinite, pan 10s ease-in-out infinite;\n  }\n\n  .leftarm404 {\n    position: absolute;\n    top: 159px;\n    left: 0;\n    width: 165px;\n    height: 73px;\n    background-position: -265px -341px;\n    transform-origin: 9% 35%;\n    transform: rotateZ(0deg);\n    animation: typeLeft 0.4s linear infinite;\n  }\n\n  .rightarm404 {\n    position: absolute;\n    top: 148px;\n    left: 231px;\n    width: 157px;\n    height: 91px;\n    background-position: -442px -323px;\n    transform-origin: 90% 25%;\n    animation: typeLeft 0.4s linear infinite;\n  }\n\n  .chair404 {\n    position: absolute;\n    top: 430px;\n    left: 55px;\n    width: 260px;\n    height: 365px;\n    background-position: -12px -697px;\n  }\n\n  .legs404 {\n    position: absolute;\n    top: 378px;\n    left: 4px;\n    width: 370px;\n    height: 247px;\n    background-position: -381px -443px;\n  }\n\n  .leftshoe404 {\n    position: absolute;\n    top: 591px;\n    left: 54px;\n    width: 130px;\n    height: 92px;\n    background-position: -315px -749px;\n  }\n\n  .rightshoe404 {\n    position: absolute;\n    top: 594px;\n    left: 187px;\n    width: 135px;\n    height: 81px;\n    background-position: -453px -749px;\n    transform-origin: 35% 12%;\n    animation: tapRight 1s linear infinite;\n  }\n\n  .laptop404 {\n    position: absolute;\n    top: 186px;\n    left: 9px;\n    width: 365px;\n    height: 216px;\n    background-position: -2px -466px;\n    transform-origin: 50% 100%;\n    animation: tapWobble 0.4s linear infinite;\n  }\n\n  @keyframes sway {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    20% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(4deg);\n    }\n    45% {\n      transform: rotateZ(4deg);\n    }\n    50% {\n      transform: rotateZ(0deg);\n    }\n    70% {\n      transform: rotateZ(0deg);\n    }\n    75% {\n      transform: rotateZ(-4deg);\n    }\n    90% {\n      transform: rotateZ(-4deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n\n  @keyframes headTilt {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    20% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(-4deg);\n    }\n    35% {\n      transform: rotateZ(-4deg);\n    }\n    38% {\n      transform: rotateZ(2deg);\n    }\n    42% {\n      transform: rotateZ(2deg);\n    }\n    45% {\n      transform: rotateZ(-4deg);\n    }\n    50% {\n      transform: rotateZ(0deg);\n    }\n    70% {\n      transform: rotateZ(0deg);\n    }\n    82% {\n      transform: rotateZ(0deg);\n    }\n    85% {\n      transform: rotateZ(4deg);\n    }\n    90% {\n      transform: rotateZ(4deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n\n  @keyframes typeLeft {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(7deg);\n    }\n    75% {\n      transform: rotateZ(-6deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n\n  @keyframes typeRight {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(-6deg);\n    }\n    75% {\n      transform: rotateZ(7deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n\n  @keyframes tapWobble {\n    0% {\n      transform: rotateZ(-0.2deg);\n    }\n    50% {\n      transform: rotateZ(0.2deg);\n    }\n    100% {\n      transform: rotateZ(-0.2deg);\n    }\n  }\n\n  @keyframes tapRight {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    90% {\n      transform: rotateZ(-6deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n\n  @keyframes blink404 {\n    0% {\n      background-position: -162px -350px;\n    }\n    94% {\n      background-position: -162px -350px;\n    }\n    98% {\n      background-position: -162px -368px;\n    }\n    100% {\n      background-position: -162px -350px;\n    }\n  }\n\n  @keyframes pan {\n    0% {\n      transform: translateX(-2px);\n    }\n    49% {\n      transform: translateX(-2px);\n    }\n    50% {\n      transform: translateX(2px);\n    }\n    99% {\n      transform: translateX(2px);\n    }\n    100% {\n      transform: translateX(-2px);\n    }\n  }\n"]);return o=function(){return n},n}var i=e("vOnD").a.div(o());t.default=function(){return a.createElement(i,{className:"container"},a.createElement("div",{className:"error404page"},a.createElement("div",{className:"newcharacter404"},a.createElement("div",{className:"chair404"}),a.createElement("div",{className:"leftshoe404"}),a.createElement("div",{className:"rightshoe404"}),a.createElement("div",{className:"legs404"}),a.createElement("div",{className:"torso404"},a.createElement("div",{className:"body404"}),a.createElement("div",{className:"leftarm404"}),a.createElement("div",{className:"rightarm404"}),a.createElement("div",{className:"head404"},a.createElement("div",{className:"eyes404"}))),a.createElement("div",{className:"laptop404"}))))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-e59f42392c786de18e36.js.map