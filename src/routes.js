import {createWebHistory, createRouter} from "vue-router";
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/AllStudents.vue")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddStudent.vue")
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: () => import("./components/EditStudent.vue")
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;