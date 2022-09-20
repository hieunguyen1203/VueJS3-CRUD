<template>
    <div>
        <h3 class="text-center">All Students</h3><br/>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Birthday</th>
                <th>Gender</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="student in students" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.birth_day }}</td>
                <td>{{ gender(student.gender) }}</td>
                <td>{{ student.created_at }}</td>
                <td>{{ student.updated_at }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: student.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <button class="btn btn-danger" @click="deletePost(student.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            students: [],

        }
    },
    created() {

        this.axios
            .get('http://lphp2.abc/api/students')
            .then(response => {
                this.students = response.data;
            });
    },
    methods: {
        deletePost(id) {
            if(!confirm("Are you sure?")) {
                return;
            }
            this.axios
                .delete(`http://lphp2.abc/api/students/delete/${id}`)
                .then((response) => {
                    if(response.data.status === 1) {
                        this.$toast.success(response.data.message);
                        let i = this.students.map(item => item.id).indexOf(id); // find index of object
                        this.students.splice(i, 1)
                    }
                    else {
                        this.$toast.error(response.data.message);
                    }
                });
        },
        gender(id) {
            return id === 1 ? "Nam" : "Nữ";
        }
    }
}
</script>
