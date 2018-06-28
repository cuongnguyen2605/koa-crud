import Student from '../database/student';

class StudentRepos {

  /**
   *
   */
  all() {
    return Student
      .find({})
      .exec(error => {
        if (error) throw error;
      });
  };

  /**
   *
   * @param id
   */
  detail(id) {
    return Student
      .findById({ _id: id })
      .exec(error => {
        if (error) throw error;
      });
  };

  /**
   *
   * @param params
   */
  add(params) {
    return new Student(params)
      .save()
      .exec(error => {
        if (error) throw error;
      });
  };

  /**
   *
   * @param params
   */
  edit(params) {
    return Student
      .findByIdAndUpdate({ _id: params.id }, params)
      .exec(error => {
        if (error) throw error;
      });
  };

  /**
   *
   * @param id
   */
  del(id) {
    return Student
      .findByIdAndRemove({ _id: id })
      .exec(error => {
        if (error) throw error;
      });
  };

}

export default new StudentRepos();
