<template>
    <div>
        <h3 class="text-center">Edit Post</h3>
        <form @submit.prevent="updatePost">
            <div class="mb-3">
                <label>Tên sinh viên</label>
                <input type="text" class="form-control" v-model="student.name">
            </div>
            <div class="mb-3">
                <label>Sinh nhật</label>
                <input type="date" class="form-control" v-model="student.birth_day">
            </div>
            <div class="mb-3">
                <label>Giới tính</label>
                <select class="form-select" aria-label="Chọn giới tính" v-model="student.gender">
                    <option selected>Chọn giới tính</option>
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                </select>
            </div>
            <div class="mb-3">
                <label>Quê quán</label>
                <input type="text" class="form-control" v-model="student.location">
            </div>
            <div class="mb-3">
                <label>Mô tả</label>
                <textarea class="form-control" rows="3" v-model="student.description">
                </textarea>
            </div>
            <div class="mb-3">
                <label>Điểm tổng kết</label>
                <input type="text" class="form-control" v-model="student.total_score">
            </div>
            <div class="mb-3">
                <label>Xếp hạng</label>
                <select class="form-select" aria-label="Xếp hạng" v-model="student.rank">
                    <option selected>Xếp hạng</option>
                    <option value="1">Giỏi</option>
                    <option value="2">Khá</option>
                    <option value="3">Trung bình</option>
                    <option value="4">Yếu</option>
                    <option value="5">Kém</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Update Student</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
          student: {}
        }
    },
    created() {
        this.axios
            .get(`http://lphp2.abc/api/students/edit/${this.$route.params.id}`)
            .then((response) => {
                this.student = response.data;
                // console.log(response.data);
            });
    },
    methods: {
        updatePost() {
            this.axios
                .post(`http://lphp2.abc/api/students/update/${this.$route.params.id}`, this.student)
                .then((response) => {
                    if(response.data.status === 1) {
                        this.$toast.success(response.data.message);
                        this.$router.push({name: 'home'});
                    }
                    else{
                        this.$toast.error(response.data.message);
                    }
                })
                .catch(error => {
                    this.$toast.error(error);
                })
                .finally(() => this.loading = false);
        }
    }
}
</script>
