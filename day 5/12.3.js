
    const school = {
        teachers: [
          {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
          },
          {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
          },
        ],
        students: [
          {
            id: 10,
            name: "Jennifer",
            age: 20,
          },
          {
            id: 11,
            name: "Howard",
            age: 23,
          },
          {
            id: 12,
            name: "Old-Timmy",
            age: 86,
          },
          {
            id: 13,
            name: "Houston",
            age: 21,
          },
        ],
        findPerson: function (type, id) {
          let arr = this[type];
          let person = arr.find((element) => element.id === id);
          return person;
        },
        assignStudent: function (studentId, subject) {
          let teachers = this.teachers;
          let subjectTeachers = teachers.filter(
            (element) =>
              element.subjects.includes(subject) && element.capacityLeft > 0
          );
          if (subjectTeachers.length === 0) {
            console.log("Sorry, no available teachers left");
            return;
          }
          let availableTeacher = subjectTeachers[0];
          availableTeacher.students.push(studentId);
          availableTeacher.capacityLeft--;
        },
        assignTeachersSubject: function (teacherId, subject) {
          let teacher = this.teachers.find((t) => t.id === teacherId);
          if (!teacher.subjects.includes(subject)) {
            teacher.subjects.push(subject);
          }
        },
        newteacher: function (name, list, capacity) {
          let newobj = {
            id: this.teachers.length + 1,
            name: name,
            subject: list,
            students: [],
            capacityLeft: capacity,
          };
          this.teachers.push(newobj);
        },
      };
     