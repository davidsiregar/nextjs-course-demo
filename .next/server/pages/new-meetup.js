(() => {
var exports = {};
exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 136:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "NewMeetupForm_form__dA95d",
	"control": "NewMeetupForm_control__jRNhP",
	"actions": "NewMeetupForm_actions__2fkck"
};


/***/ }),

/***/ 9673:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 8439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/Card.module.css
var Card_module = __webpack_require__(9673);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./components/ui/Card.js


function Card(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Card_module_default()).card,
        children: props.children
    });
}
/* harmony default export */ const ui_Card = (Card);

// EXTERNAL MODULE: ./components/meetups/NewMeetupForm.module.css
var NewMeetupForm_module = __webpack_require__(136);
var NewMeetupForm_module_default = /*#__PURE__*/__webpack_require__.n(NewMeetupForm_module);
;// CONCATENATED MODULE: ./components/meetups/NewMeetupForm.js




function NewMeetupForm(props) {
    const titleInputRef = (0,external_react_.useRef)();
    const imageInputRef = (0,external_react_.useRef)();
    const addressInputRef = (0,external_react_.useRef)();
    const descriptionInputRef = (0,external_react_.useRef)();
    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        props.onAddMeetup(meetupData);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(ui_Card, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            className: (NewMeetupForm_module_default()).form,
            onSubmit: submitHandler,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NewMeetupForm_module_default()).control,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "title",
                            children: "Meetup Title"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            required: true,
                            id: "title",
                            ref: titleInputRef
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NewMeetupForm_module_default()).control,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "image",
                            children: "Meetup Image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "url",
                            required: true,
                            id: "image",
                            ref: imageInputRef
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NewMeetupForm_module_default()).control,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "address",
                            children: "Address"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            required: true,
                            id: "address",
                            ref: addressInputRef
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NewMeetupForm_module_default()).control,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "description",
                            children: "Description"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            id: "description",
                            required: true,
                            rows: "5",
                            ref: descriptionInputRef
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (NewMeetupForm_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Add Meetup"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const meetups_NewMeetupForm = (NewMeetupForm);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/new-meetup/index.js





function NewMeetupPage() {
    const router = (0,router_namespaceObject.useRouter)();
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log(data);
        router.push("/");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "React Meetups"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "browse a huge list of highly active react "
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_NewMeetupForm, {
                onAddMeetup: addMeetupHandler
            }),
            ";"
        ]
    });
}
/* harmony default export */ const new_meetup = (NewMeetupPage);


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8439));
module.exports = __webpack_exports__;

})();