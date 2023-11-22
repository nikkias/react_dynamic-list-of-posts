(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n.n(a),s=n(6),r=n(3),i=n(4),o=n.n(i),l=n(2),d=(n(18),n(19),n(20),n(5)),m=n.n(d),j=n(0),u=function(e){var t=e.posts,n=e.selectedPost,a=e.setSelectedPost;return Object(j.jsxs)("div",{"data-cy":"PostsList",children:[Object(j.jsx)("p",{className:"title",children:"Posts:"}),Object(j.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"has-background-link-light",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"Post",children:[Object(j.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(j.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{type:"button","data-cy":"PostButton",className:m()("button is-link",{"is-light":(null===n||void 0===n?void 0:n.id)!==e.id}),onClick:function(){return function(e){a((null===n||void 0===n?void 0:n.id)===e.id?null:e)}(e)},children:(null===n||void 0===n?void 0:n.id)!==e.id?"Open":"Close"})})]},e.id)}))})]})]})},b=n(12),O=n(1),h=(n(22),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),f=n(8),x={name:"",body:"",email:""},p={name:!1,email:!1,body:!1},v=function(e){var t=e.handleCreateComment,n=e.isCommentLoading,a=Object(l.useState)(x),c=Object(r.a)(a,2),s=c[0],i=c[1],o=Object(l.useState)(p),d=Object(r.a)(o,2),u=d[0],b=d[1],h=function(e,t){b((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(f.a)({},e,!1))})),i((function(n){return Object(O.a)(Object(O.a)({},n),{},Object(f.a)({},e,t))}))};return Object(j.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var n=s.name.trim(),a=s.email.trim(),c=s.body.trim();n&&a&&c?(t(s),i((function(e){return Object(O.a)(Object(O.a)({},e),{},{body:""})})),b(p)):b({name:!n,email:!a,body:!c})},children:[Object(j.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:m()("input",{"is-danger":u.name}),value:s.name,onChange:function(e){return h("name",e.target.value)}}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-user"})}),Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:u.name&&Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),u.name&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:m()("input",{"is-danger":u.email}),value:s.email,onChange:function(e){return h("email",e.target.value)}}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-envelope"})}),Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:u.email&&Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),u.email&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:m()("textarea",{"is-danger":u.body}),value:s.body,onChange:function(e){return h("body",e.target.value)}})}),u.body&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"submit",className:m()("button","is-link",{"is-loading":n}),children:"Add"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){i(x),b(p)},children:"Clear"})})]})]})},g="https://mate.academy/students-api";function N(e){return new Promise((function(t){setTimeout(t,e)}))}function y(e){return C.apply(this,arguments)}function C(){return C=Object(s.a)(o.a.mark((function e(t){var n,a,c,s,i,l,d=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:"GET",a=d.length>2&&void 0!==d[2]?d[2]:null,c={method:n},a&&(c.body=JSON.stringify(a),c.headers={"Content-Type":"application/json; charset=UTF-8"}),e.next=6,Promise.all([fetch(g+t,c),N(300)]);case 6:return s=e.sent,i=Object(r.a)(s,1),l=i[0],e.abrupt("return",l.ok?l.json():Promise.reject());case 10:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}var w=function(e){return y(e)},k=function(e,t){return y(e,"POST",t)},E=function(e){return y(e,"DELETE")},L=function(e){return E("/comments/".concat(e))},P=function(e){var t=e.title,n=e.body,a=e.id,c=Object(l.useState)({comments:[],arePostsLoading:!0,isLoadingError:!1,isWritingComment:!1,isCommentLoading:!1,deletingCommentId:null}),i=Object(r.a)(c,2),d=i[0],u=i[1],f=!d.arePostsLoading&&!d.isLoadingError&&0===d.comments.length,x=!d.arePostsLoading&&!d.isLoadingError&&d.comments.length>0,p=Object(l.useCallback)(Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u((function(e){return Object(O.a)(Object(O.a)({},e),{},{arePostsLoading:!0})})),e.prev=1,u((function(e){return Object(O.a)(Object(O.a)({},e),{},{isLoadingError:!1})})),e.next=5,w("/comments?postId=".concat(a));case 5:t=e.sent,u((function(e){return Object(O.a)(Object(O.a)({},e),{},{comments:t})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),u((function(e){return Object(O.a)(Object(O.a)({},e),{},{isLoadingError:!0})}));case 12:return e.prev=12,u((function(e){return Object(O.a)(Object(O.a)({},e),{},{arePostsLoading:!1})})),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),[a]),g=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u((function(e){return Object(O.a)(Object(O.a)({},e),{},{deletingCommentId:t})})),e.prev=1,e.next=4,L(t);case 4:u((function(e){return Object(O.a)(Object(O.a)({},e),{},{comments:e.comments.filter((function(e){return e.id!==t}))})})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),u((function(e){return Object(O.a)(Object(O.a)({},e),{},{isLoadingError:!0})}));case 10:return e.prev=10,u((function(e){return Object(O.a)(Object(O.a)({},e),{},{deletingCommentId:null})})),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u((function(e){return Object(O.a)(Object(O.a)({},e),{},{isCommentLoading:!0})})),e.prev=1,e.next=4,c=Object(O.a)(Object(O.a)({},t),{},{postId:a}),k("/comments",c);case 4:n=e.sent,u((function(e){return Object(O.a)(Object(O.a)({},e),{},{comments:[].concat(Object(b.a)(e.comments),[n])})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),u((function(e){return Object(O.a)(Object(O.a)({},e),{},{isLoadingError:!0})}));case 11:return e.prev=11,u((function(e){return Object(O.a)(Object(O.a)({},e),{},{isCommentLoading:!1})})),e.finish(11);case 14:case"end":return e.stop()}var c}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){p(),u((function(e){return Object(O.a)(Object(O.a)({},e),{},{isWritingComment:!1})}))}),[p,a]),Object(j.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(j.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("h2",{"data-cy":"PostTitle",children:t}),Object(j.jsx)("p",{"data-cy":"PostBody",children:n})]}),Object(j.jsxs)("div",{className:"block",children:[d.arePostsLoading&&Object(j.jsx)(h,{}),!d.arePostsLoading&&d.isLoadingError&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),f&&Object(j.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),x&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"title is-4",children:"Comments:"}),d.comments.map((function(e){var t=e.id,n=e.email,a=e.name,c=e.body;return Object(j.jsxs)("article",{className:m()("message","is-small",{"is-loading-custom":d.deletingCommentId===t}),"data-cy":"Comment",children:[Object(j.jsxs)("div",{className:"message-header",children:[Object(j.jsx)("a",{href:"mailto:".concat(n),"data-cy":"CommentAuthor",children:a}),Object(j.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){g(t)},children:"delete button"})]}),Object(j.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:c})]},t)}))]})]}),(!d.isWritingComment||d.isLoadingError)&&Object(j.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return u((function(e){return Object(O.a)(Object(O.a)({},e),{},{isWritingComment:!0})}))},children:"Write a comment"}),d.isWritingComment&&!d.isLoadingError&&Object(j.jsx)(v,{handleCreateComment:N,isCommentLoading:d.isCommentLoading})]})})},S=function(e){var t=e.users,n=e.selectedUser,a=e.setSelectedUser,c=Object(l.useState)(!1),s=Object(r.a)(c,2),i=s[0],o=s[1];return Object(j.jsxs)("div",{"data-cy":"UserSelector",className:m()("dropdown",{"is-active":i}),children:[Object(j.jsx)("div",{className:"dropdown-trigger",children:Object(j.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return o(!i)},onBlur:function(){return o(!1)},children:[Object(j.jsx)("span",{children:n?n.name:"Choose a user"}),Object(j.jsx)("span",{className:"icon is-small",children:Object(j.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(j.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(j.jsx)("a",{href:"#user-".concat(e.id),className:m()("dropdown-item",{"is-active":(null===n||void 0===n?void 0:n.id)===e.id}),onMouseDown:function(){return a(e)},children:e.name},e.id)}))})})]})},I=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)(null),i=Object(r.a)(c,2),d=i[0],b=i[1],O=Object(l.useState)([]),f=Object(r.a)(O,2),x=f[0],p=f[1],v=Object(l.useState)(!1),g=Object(r.a)(v,2),N=g[0],y=g[1],C=Object(l.useState)(!1),k=Object(r.a)(C,2),E=k[0],L=k[1],I=Object(l.useState)(null),T=Object(r.a)(I,2),F=T[0],B=T[1],U=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w("/users");case 3:t=e.sent,a(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Failed to load users");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),W=Object(l.useCallback)(Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=16;break}return y(!0),e.prev=2,e.next=5,n=null===d||void 0===d?void 0:d.id,w("/posts?userId=".concat(n));case 5:t=e.sent,p(t),L(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),L(!0);case 13:return e.prev=13,y(!1),e.finish(13);case 16:case"end":return e.stop()}var n}),e,null,[[2,10,13,16]])}))),[d]);Object(l.useEffect)((function(){W(),B(null)}),[d,W]),Object(l.useEffect)((function(){U()}),[]);var D=!N&&!E&&!x.length&&d,M=!N&&!!x.length&&!E;return Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"tile is-ancestor",children:[Object(j.jsx)("div",{className:"tile is-parent",children:Object(j.jsxs)("div",{className:"tile is-child box is-success",children:[Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(S,{users:n,selectedUser:d,setSelectedUser:b})}),Object(j.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!d&&Object(j.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),N&&Object(j.jsx)(h,{}),!N&&E&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),D&&Object(j.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),M&&Object(j.jsx)(u,{posts:x,selectedPost:F,setSelectedPost:B})]})]})}),Object(j.jsx)("div",{"data-cy":"Sidebar",className:m()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":F}),children:Object(j.jsx)("div",{className:"tile is-child box is-success ",children:F&&Object(j.jsx)(P,{title:F.title,body:F.body,id:F.id})})})]})})})};c.a.render(Object(j.jsx)(I,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.7d069e84.chunk.js.map