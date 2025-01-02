import {createRouter, createWebHistory} from "vue-router";
import sort from "@/view/admin/sort.vue"
import feedback from "@/view/admin/feedback.vue";
import Info from "@/view/admin/Info.vue";
import merchant from "@/view/admin/merchant.vue";
import notice from "@/view/admin/Notice.vue";
import more from "@/view/admin/more.vue";

const routes = [
  {
    path: "/",
    component: ()=>import("@/view/index.vue"),
  },
  {
    path: "/login",
    component: ()=>import("@/view/login.vue"),
  },
  {
    path: "/register",
    component: ()=>import("@/view/register.vue"),
  },
  {
    path: "/admin",
    component: ()=>import('@/view/admin/index.vue'),
    redirect: "/info",
    // meta: {
    //     isLogin: true
    // },
    children: [
      {
        path: "/sort/:toName?",
        name: "sort",
        component: sort,
        // meta: {
        //     isLogin: true
        // }
      }, {
        path: "/feedback/:toName?",
        component: feedback,
        name: "feedback",
        // meta: {
        //     isLogin: true
        // },
      }, {
        path: "/info/:toName?",
        component: Info,
        name: "info",
        // meta: {
        //     isLogin: true
        // },
      }, {
        path: "/merchant/:toName?",
        component: merchant,
        name: "merchant",
        // meta: {
        //     isLogin: true
        // },
      }, {
        path: "/notice/:toName?",
        component: notice,
        name: "notice",
        // meta: {
        //     isLogin: true
        // },
      }, {
        path: "/more",
        component: more,
        name: "more",
        // meta: {
        //     isLogin: true
        // },
      }
    ]
  },
  {
    path: "/modifyClient",
    component: ()=>import("@/view/client/modify.vue"),
  },
  {
    path: "/detailsPage",
    component: () => import("@/view/client/details.vue"),
  },
  {
    path: '/categories',
    component: () => import("@/view/client/more.vue")
  },
  {
    path:'/check',
    component:()=>import('@/view/client/join.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
//鉴权（没有登录不能访问页面）
router.beforeEach((to, from, next) => {
  // const userType = getLoc("type"); // 获取用户类型
  // const isLoggedIn = getLoc("username") !== undefined; // 检查是否已登录
  //
  // if (to.meta.isLogin && !isLoggedIn) { // 未登录
  //     // window.alert("未登录，您无权访问此页面！");
  //     next({ path: "/login" });
  // } else if (userType === "" && (to.path === "/login" || to.path === "/register")) { // 用户登录后禁止访问登录界面
  //     window.alert("已登录，您无权访问此页面！");
  //     next({ path: "/" });
  // } else if (userType === "admin" && (to.path === "/login" || to.path === "/register" || /\/user\//.test(to.path))) { // 管理员登录后禁止访问登录注册页面和用户界面
  //     window.alert("管理员不能访问用户界面！"); // 显示警告框
  //     next({ path: "/admin" });
  // } else if (userType !== "admin" && /\/admin\//.test(to.path)) { // 用户不能访问管理员界面
  //     window.alert("您无权访问此管理员页面！"); // 显示警告框
  //     next({ path: "/" }); // 或者根据需求跳转到其他页面
  // } else {
  //     next(); // 允许访问
  // }
  next();
  // if (to.meta.isLogin && !getLoc("username")) {//未登录
  //     next({path: "/login"})
  // } else if (getLoc("type") === "" && (to.path === "/login" || to.path === "/register")) {//用户登录后禁止访问登录界面
  //     next({path: "/"})
  // } else if (getLoc("type") === "admin" && (to.path === "/login" || to.path === "/register")) {//管理员登录后禁止访问登录注册页面
  //     next({path: "/admin"})
  // }else{
  //     next();
  // }
})
export default router;
