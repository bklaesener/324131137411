(self.webpackChunkawesome_ha_blueprints=self.webpackChunkawesome_ha_blueprints||[]).push([[535],{2531:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),l=o(4920),s=["components"],a={title:"Controller - IKEA E1766 TR\xc5DFRI Open/Close Remote",description:"Controller automation for executing any kind of action triggered by the provided IKEA E1766 TR\xc5DFRI Open/Close Remote. Supports deCONZ, ZHA, Zigbee2MQTT."},p=void 0,u={unversionedId:"blueprints/controllers/ikea_e1766",id:"blueprints/controllers/ikea_e1766",isDocsHomePage:!1,title:"Controller - IKEA E1766 TR\xc5DFRI Open/Close Remote",description:"Controller automation for executing any kind of action triggered by the provided IKEA E1766 TR\xc5DFRI Open/Close Remote. Supports deCONZ, ZHA, Zigbee2MQTT.",source:"@site/docs/blueprints/controllers/ikea_e1766.mdx",sourceDirName:"blueprints/controllers",slug:"/blueprints/controllers/ikea_e1766",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/ikea_e1766",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/ikea_e1766.mdx",tags:[],version:"current",frontMatter:{title:"Controller - IKEA E1766 TR\xc5DFRI Open/Close Remote",description:"Controller automation for executing any kind of action triggered by the provided IKEA E1766 TR\xc5DFRI Open/Close Remote. Supports deCONZ, ZHA, Zigbee2MQTT."}},d=[{value:"Description",id:"description",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Available Hooks",id:"available-hooks",children:[{value:"Light",id:"light",children:[{value:"Default Mapping",id:"default-mapping",children:[],level:4},{value:"Mapping #2",id:"mapping-2",children:[],level:4}],level:3},{value:"Media Player",id:"media-player",children:[{value:"Default Mapping",id:"default-mapping-1",children:[],level:4}],level:3},{value:"Cover",id:"cover",children:[{value:"Default Mapping",id:"default-mapping-2",children:[],level:4}],level:3}],level:2},{value:"Additional Notes",id:"additional-notes",children:[{value:"Helper - Last Controller Event",id:"helper---last-controller-event",children:[],level:3},{value:"Virtual double press events",id:"virtual-double-press-events",children:[],level:3},{value:"Hooks support and missing long press events",id:"hooks-support-and-missing-long-press-events",children:[],level:3}],level:2},{value:"Changelog",id:"changelog",children:[],level:2}],c={toc:d};function h(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Lu,{id:"ikea_e1766",category:"controllers",mdxType:"ImportCard"}),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This blueprint is part of the ",(0,i.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA E1766 TR\xc5DFRI Open/Close Remote. Supports controllers integrated with deCONZ, ZHA, Zigbee2MQTT. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),(0,i.kt)("p",null,"The blueprint also adds support for virtual double button press events, which are not exposed by the controller itself."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Automations created with this blueprint can be connected with one or more ",(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/controllers/ikea_e1766#available-hooks"},"Hooks available for this controller")," for additional details."))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)(l.nb,{id:"deconz",mdxType:"Requirement"}),(0,i.kt)(l.nb,{id:"zha",mdxType:"Requirement"}),(0,i.kt)(l.nb,{id:"zigbee2mqtt",mdxType:"Requirement"}),(0,i.kt)(l.nb,{name:"Input Text Integration",required:!0,mdxType:"Requirement"},(0,i.kt)("p",null,"This integration provides the entity which must be provided to the blueprint in the ",(0,i.kt)("strong",{parentName:"p"},"Helper - Last Controller Event")," input. Learn more about this helper by reading the dedicated section in the ",(0,i.kt)("a",{parentName:"p",href:"#helper---last-controller-event"},"Additional Notes"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)(l.II,{name:"Integration",description:"Integration used for connecting the remote with Home Assistant. Select one of the available values.",selector:"select",required:!0,mdxType:"Input"}),(0,i.kt)(l.II,{name:"Controller Device",description:"The controller device to use for the automation. Choose a value only if the remote is integrated with deCONZ, ZHA.",selector:"device",required:"deCONZ, ZHA",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Controller Entity",description:"The action sensor of the controller to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"Zigbee2MQTT",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Helper - Last Controller Event",description:"Input Text used to store the last event fired by the controller. You will need to manually create a text input entity for this, please read the blueprint Additional Notes for more info.",selector:"entity",required:!0,mdxType:"Input"}),(0,i.kt)(l.II,{name:"Up button short press",description:"Action to run on short up button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Up button release",description:"Action to run on up button release after long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Up button double press",description:"Action to run on double up button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Down button short press",description:"Action to run on short down button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Down button release",description:"Action to run on down button release after long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Down button double press",description:"Action to run on double down button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Expose up button double press event",description:"Choose whether or not to expose the virtual double press event for the up button. Turn this on if you are providing an action for the up button double press event.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Expose down button double press event",description:"Choose whether or not to expose the virtual double press event for the down button. Turn this on if you are providing an action for the down button double press event.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Helper - Double Press delay",description:"Max delay between the first and the second button press for the double press event. Provide a value only if you are using a double press action. Increase this value if you notice that the double press action is not triggered properly.",selector:"number",mdxType:"Input"}),(0,i.kt)(l.II,{name:"Helper - Debounce delay",description:"Delay used for debouncing RAW controller events, by default set to 0. A value of 0 disables the debouncing feature. Increase this value if you notice custom actions or linked Hooks running multiple times when interacting with the device. When the controller needs to be debounced, usually a value of 100 is enough to remove all duplicate events.",selector:"number",mdxType:"Input"}),(0,i.kt)("h2",{id:"available-hooks"},"Available Hooks"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Virtual double press actions")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some of the following mappings might include actions for virtual double press events, which are disabled by default.\nIf you are using a hook mapping which provides an action for a virtual double press event, please make sure to enable support for virtual double press on the corresponding buttons with the corresponding blueprint input."))),(0,i.kt)("h3",{id:"light"},"Light"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."),(0,i.kt)("h4",{id:"default-mapping"},"Default Mapping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Up button short press -> Brightness up"),(0,i.kt)("li",{parentName:"ul"},"Up button double press -> Turn on"),(0,i.kt)("li",{parentName:"ul"},"Down button short press -> Brightness down"),(0,i.kt)("li",{parentName:"ul"},"Down button double press -> Turn off")),(0,i.kt)("h4",{id:"mapping-2"},"Mapping #2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Up button short press -> Brightness up"),(0,i.kt)("li",{parentName:"ul"},"Up button double press -> Color up"),(0,i.kt)("li",{parentName:"ul"},"Down button short press -> Brightness down"),(0,i.kt)("li",{parentName:"ul"},"Down button double press -> Color down")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/light"},"Light Hook docs")),(0,i.kt)("h3",{id:"media-player"},"Media Player"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),(0,i.kt)("h4",{id:"default-mapping-1"},"Default Mapping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Up button short press -> Volume up"),(0,i.kt)("li",{parentName:"ul"},"Up button double press -> Next track"),(0,i.kt)("li",{parentName:"ul"},"Down button short press -> Volume down"),(0,i.kt)("li",{parentName:"ul"},"Down button double press -> Play/Pause")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player"},"Media Player Hook docs")),(0,i.kt)("h3",{id:"cover"},"Cover"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a cover. Supports opening, closing and tilting the cover."),(0,i.kt)("h4",{id:"default-mapping-2"},"Default Mapping"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Up button short press -> Open cover"),(0,i.kt)("li",{parentName:"ul"},"Down button short press -> Close cover"),(0,i.kt)("li",{parentName:"ul"},"Down button double press -> Stop cover and cover tilt")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/cover"},"Cover Hook docs")),(0,i.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,i.kt)("h3",{id:"helper---last-controller-event"},"Helper - Last Controller Event"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," (Helper - Last Controller Event) input serves as a permanent storage area for the automation. The stored info is used to implement the blueprint's core functionality. To learn more about the helper, how it's used and why it's required, you can read the dedicated section in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#helper---last-controller-event-input"},"Controllers-Hooks Ecosystem documentation"),"."),(0,i.kt)("h3",{id:"virtual-double-press-events"},"Virtual double press events"),(0,i.kt)("p",null,"It's also important to note that the controller doesn't natively support double press events. Instead , this blueprint provides virtual double press events. You can read more about them in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#virtual-events"},"general Controllers-Hooks Ecosystem documentation"),"."),(0,i.kt)("h3",{id:"hooks-support-and-missing-long-press-events"},"Hooks support and missing long press events"),(0,i.kt)("p",null,"Due to the controller not exposing long press events but only short and release events, it's not possible to determine the nature of a button press. Therefore, to prevent an erroneous behaviour, Hooks only rely on short and virtual double press events to implement their functionality for this controller."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2021-10-29"),": first blueprint version \ud83c\udf89")))}h.isMDXComponent=!0}}]);