const Student = require('../database/student');

class StudentRepos {

    all() {
        return Student.find({}, error => {
            if (error) throw error;
        });
    };

    detail(id) {
        return Student
            .find({_id: id})
            .limit(1, (error) => {
                if (error) throw error;
            });
    };

    add(params) {
        let student = new Student({
            full_name    : params.full_name,
            date_of_birth: params.date_of_birth,
            address      : params.address,
            position     : params.position,
            department   : params.department
        });
        return student.save(error => {
            if (error) throw error;
        });
    };

    edit(params) {
        return Student.findOneAndUpdate({_id: params.id}, {
            full_name    : params.full_name,
            date_of_birth: params.date_of_birth,
            address      : params.address,
            position     : params.position,
            department   : params.department
        }, error => {
            if (error) throw error;
        });
    };

    del(id) {
        return Student.findOneAndDelete({_id: id}, error => {
            if (error) throw error;
        });
    };

}

export default new StudentRepos();
