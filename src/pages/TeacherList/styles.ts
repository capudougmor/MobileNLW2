import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
  },

  teacherList: {
    marginTop: -40,
  },

  seatchForm: {
    marginBottom: 14,
  },

  label: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputBlock: {
    width: "48%"
  },

  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  submitButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
  }

})


export default styles