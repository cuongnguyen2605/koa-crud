import Student from '../database/student';


class StudentRepos {

  /**
   *
   */
  all() {
    return Student.find();
  };

  /**
   *
   * @param id
   */
  detail(id) {
    return Student.findById({ _id: id });
  };

  /**
   *
   * @param params
   */
  create(params) {
    return new Student(params).save();
  };

  /**
   *
   * @param params
   */
  edit(params) {
    return Student.findByIdAndUpdate({ _id: params.id }, params);
  };

  /**
   *
   * @param id
   */
  del(id) {
    return Student.findByIdAndRemove({ _id: id });
  };

}


export default StudentRepos;
