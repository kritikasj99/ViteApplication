
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Services = () => {
  const [students, setStudents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState({ skills: [] });
  const [showForm, setShowForm] = useState(false);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    fee: "",
    isMember: false,
    skills: "",
    address: { city: "", state: "", pincode: "", country: "" },
  });

  useEffect(() => {
    fetchStudents();
  }, [studentToEdit]);

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(import.meta.env.VITE_API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      const data = await res.data;
      console.log("Received from server:", data);
      setStudents(res.data.students);
    } catch (error) {
      console.error(error);
    }
  };

  // Delete student
  const deleteStudent = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Student deleted!");
      fetchStudents();
    } catch (error) {
      toast.error("Unable to delete user!");
      console.error(error);
    }
  };

  // Save/Edit student
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${import.meta.env.VITE_API_URL}/${studentToEdit._id}`, // ✅ only append ID
        studentToEdit,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Student updated!");
      fetchStudents();
    } catch (error) {
      toast.error("Unable to update user!");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setNewStudent((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setNewStudent((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingStudentId) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/${editingStudentId}`,
          newStudent
        );
      } else {
        await axios.post(import.meta.env.VITE_API_URL, newStudent);
      }
      setShowForm(false);
      setEditingStudentId(null);
      fetchStudents();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingStudentId(null);
    setNewStudent({
      name: "",
      image: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
      fee: "",
      isMember: false,
      skills: "",
      address: { city: "", state: "", pincode: "", country: "" },
    });
  };

  const editStudent = (user) => {
    const dateStr = user.dob.substring(0, user.dob.indexOf("T"));
    setStudentToEdit({ ...user, dob: dateStr });
    setIsOpen(true);
  };

  return (
    <>
      <EditStudentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        student={studentToEdit}
        setStudentToEdit={setStudentToEdit}
        onSave={handleSave}
      />

      {/* Add student button */}
      <div className="flex justify-end mt-4 mr-2">
        <button className="btn btn-success" onClick={() => setShowForm(true)}>
          Add Student
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg w-[400px] space-y-3"
          >
            <h2 className="text-xl font-bold">
              {editingStudentId ? "Edit Student" : "Add Student"}
            </h2>

            {/* Name */}
            <input
              name="name"
              placeholder="Name"
              value={newStudent.name}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* Image */}
            <input
              name="image"
              placeholder="Image URL"
              value={newStudent.image}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* Email */}
            <input
              name="email"
              placeholder="Email"
              value={newStudent.email}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={newStudent.password}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* DOB */}
            <input
              type="date"
              name="dob"
              value={newStudent.dob}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* Gender */}
            <select
              name="gender"
              value={newStudent.gender}
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            {/* Fee */}
            <input
              type="number"
              name="fee"
              placeholder="Fee"
              value={newStudent.fee}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* Is Member */}
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isMember"
                checked={newStudent.isMember}
                onChange={handleChange}
                className="mr-2"
              />
              Is Member
            </label>

            {/* Skills */}
            <input
              name="skills"
              placeholder="Skills (comma separated)"
              value={newStudent.skills}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* Address - City */}
            <input
              name="address.city"
              placeholder="City"
              value={newStudent.address.city}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* Address - State */}
            <input
              name="address.state"
              placeholder="State"
              value={newStudent.address.state}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* Address - Pincode */}
            <input
              name="address.pincode"
              placeholder="Pincode"
              value={newStudent.address.pincode}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* Address - Country */}
            <input
              name="address.country"
              placeholder="Country"
              value={newStudent.address.country}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {editingStudentId ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Student list */}
      {students.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 px-20 my-10">
          {students.map((student, i) => (
            <StudentCard
              key={i}
              student={student}
              deleteStudent={deleteStudent}
              editStudent={editStudent}
            />
          ))}
        </div>
      ) : (
        <h1>No students to display</h1>
      )}
    </>
  );
};

export default Services;

const StudentCard = ({ student, deleteStudent, editStudent }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 rounded-t-lg h-[250px]"
        src={
          student?.image ||
          "https://avatars.githubusercontent.com/u/36691571?v=4"
        }
        alt={student?.description}
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {student?.name}
        </h5>
        <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">
          {student?.email}
        </h5>
        <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">
          {student?.skills}
        </h5>
        <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">
          {student?.address?.city}, {student?.address?.state},
          {student?.address?.country}
        </h5>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => editStudent(student)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteStudent(student._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

function EditStudentModal({
  isOpen,
  onClose,
  student,
  onSave,
  setStudentToEdit,
}) {
  const [skills, setSkills] = useState("");
  useEffect(() => {
    console.log(student.skills);
    setSkills(student?.skills?.join(","));
  }, [student]);

  const handleChange = (field, value) => {
    setStudentToEdit((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressChange = (field, value) => {
    setStudentToEdit((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  useEffect(() => {
    setStudentSkills();
  }, [skills]);
  const setStudentSkills = () => {
    const skillsArr = skills.split(","); //.map((s) => s.trim())
    console.log("skills is :", skillsArr);
    setStudentToEdit((prev) => ({
      ...student,
      ["skills"]: skillsArr,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentSkills();
    onSave();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-opacity-40"
            onClick={onClose}
          />
          <motion.div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative z-10">
            <h2 className="text-xl font-semibold mb-4">Edit Student</h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-h-[70vh] overflow-y-auto pr-2"
            >
              {/* Name */}
              <input
                type="text"
                value={student?.name || ""}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Name"
                className="w-full border rounded p-2"
              />

              {/* Image */}
              <input
                type="text"
                value={student?.image || ""}
                onChange={(e) => handleChange("image", e.target.value)}
                placeholder="Image URL"
                className="w-full border rounded p-2"
              />

              {/* Email */}
              <input
                type="email"
                value={student?.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Email"
                className="w-full border rounded p-2"
              />

              {/* Password */}
              <input
                type="password"
                value={student?.password || ""}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Password"
                className="w-full border rounded p-2"
              />

              {/* DOB */}
              <input
                type="date"
                value={student?.dob || ""}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="w-full border rounded p-2"
              />

              {/* Gender */}
              <select
                value={student?.gender || ""}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {/* Fee */}
              <input
                type="number"
                value={student?.fee || ""}
                onChange={(e) => handleChange("fee", e.target.value)}
                placeholder="Fee"
                className="w-full border rounded p-2"
              />

              {/* Is Member */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={student?.isMember || false}
                  onChange={(e) => handleChange("isMember", e.target.checked)}
                />
                Is Member
              </label>

              {/* Skills */}
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Skills (comma separated)"
                className="w-full border rounded p-2"
              />

              {/* Address */}
              <input
                type="text"
                value={student?.address?.city || ""}
                onChange={(e) => handleAddressChange("city", e.target.value)}
                placeholder="City"
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                value={student?.address?.state || ""}
                onChange={(e) => handleAddressChange("state", e.target.value)}
                placeholder="State"
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                value={student?.address?.pincode || ""}
                onChange={(e) => handleAddressChange("pincode", e.target.value)}
                placeholder="Pincode"
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                value={student?.address?.country || ""}
                onChange={(e) => handleAddressChange("country", e.target.value)}
                placeholder="Country"
                className="w-full border rounded p-2"
              />

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
