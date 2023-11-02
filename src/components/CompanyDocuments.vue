<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
//Table Heading
const tableHeadings = [
  { id: 1, text: "Name" },
  { id: 2, text: "Upload" },
];

const fileInput = ref(null);
const selectedFileName = ref("");
const fileInputRef = ref(null);
const selectedFiles = ref([]);
const uploadedDocuments = ref([
  {
    name: "Memorandum and Articles of Associations",
    id: 123,
    documents: [],
  },
  {
    name: "Certificate of Directorship or equivalent",
    id: 234,
    documents: [],
  },
  {
    name: "Cretificate of Shareholders",
    id: 763,
    documents: [],
  },
]);

const handleFileSelection = (event, person, personId) => {
  for (let i = 0; i <= uploadedDocuments.value.length; i++) {
    if (personId === uploadedDocuments.value[i]?.id) {
      const files = event.target.files;
      console.log(person);
      selectedFileName.value = event.target.value;
      if (files.length > 0) {
        Array.from(files).forEach((file) => {
          const newDocument = { name: file.name };
          person.documents.push(newDocument);
        });
        selectedFileName.value = event.target.value;
      }
    }
  }
};

const removeFile = (documentIndex, personIndex) => {
  if (
    uploadedDocuments.value[personIndex] &&
    uploadedDocuments.value[personIndex].documents[documentIndex]
  ) {
    // Use splice to remove the document at the specified index
    uploadedDocuments.value[personIndex].documents.splice(documentIndex, 1);
  }
};

// const truncateFileName = (fileName) => {
//   const maxLength = 40;
//   return fileName.length > maxLength
//     ? fileName.slice(0, maxLength) + "..."
//     : fileName;
// };
</script>

<template>
  <p class="text-sm">
    Please add all Ultimate Beneficial Owners (UBOs), Shareholderes, Directors,
    and Secretaries. <br />
    Aditionally add any Signatories who will use the account. Role-based access
    rights will be set up later.
  </p>
  <p class="mt-8 text-sm">
    You will have to upload Power of Attorney docments later for any Signatories
    added.
  </p>
  <pre>{{ uploadedDocuments }}</pre>
  <div
    class="flex justify-center overflow-x-auto items-center sm:rounded-lg mt-8"
  >
    <table class="w-full text-sm border text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-customTablebg">
        <tr class="border-b border-gray-400">
          <th scope="col" colspan="5" class="px-6 text-base py-3 text-left">
            Corporate Documents
          </th>
        </tr>
        <tr>
          <th
            v-for="heading in tableHeadings"
            :key="heading.id"
            scope="col"
            class="px-6 border border-gray-400 py-3"
          >
            {{ heading.text }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-customBg">
        <template
          v-for="(person, personIndex) in uploadedDocuments"
          :key="personIndex"
        >
          <tr class="border bg-customBg">
            <td
              :rowspan="person.documents.length + 1"
              scope="row"
              class="border border-customBorder rounded-md font-medium text-gray-900 whitespace-nowrap"
              style="width: 50%"
            >
              <div class="flex justify-between">
                <div class="flex px-2 items-center">{{ person.name }}</div>
                <label
                  :for="`uploader_${person.id}`"
                  class="flex justify-between"
                >
                  <input
                    type="file"
                    :id="`uploader_${person.id}`"
                    ref="fileInput"
                    style="display: none"
                    multiple
                    @change="
                      (event) => handleFileSelection(event, person, person.id)
                    "
                  />
                  <section
                    v-if="person.documents.name"
                    class="flex items-center gap-1"
                  >
                    <span>{{ person.documents.name }}</span>
                    <i class="material-icons">done</i>
                  </section>
                  <img
                    src="../assets/icons/file_upload.png"
                    class="h-[24px] ml-2 cursor-pointer"
                    alt=""
                  />
                </label>
              </div>
            </td>
            <td
              v-if="person.documents.length == 0"
              class="border border-customBorder"
              style="width: 50%"
            >
              <div class="p-2">
                <label
                  :for="`uploader_${person.id}`"
                  class="flex justify-end items-end"
                >
                  <input
                    type="file"
                    :id="`uploader_${person.id}`"
                    ref="fileInput"
                    style="display: none"
                    multiple
                    @change="
                      (event) => handleFileSelection(event, person, person.id)
                    "
                  />
                  <img
                    src="../assets/icons/file_upload.png"
                    class="h-[24px] ml-2 cursor-pointer hidden"
                    alt=""
                  />
                </label>
              </div>
            </td>
          </tr>

          <tr
            v-if="person.documents.length > 0"
            v-for="(document, index) in person.documents"
          >
            <td class="border border-customBorder" style="width: 50%">
              <div
                class="p-2"
                :class="{
                  'flex justify-end items-end': !document.name,
                  'flex justify-between items-end': document.name,
                }"
              >
                <label
                  :for="`uploader_${person.id}`"
                  class="flex justify-between"
                >
                  <input
                    type="file"
                    :id="`uploader_${person.id}`"
                    ref="fileInput"
                    style="display: none"
                    multiple
                    @change="
                      (event) => handleFileSelection(event, person, person.id)
                    "
                  />
                  <section v-if="document.name" class="flex items-center gap-1">
                    <span>{{ document.name }}</span>
                    <i class="material-icons">done</i>
                  </section>
                  <img
                    v-if="document.name"
                    src="../assets/icons/file_upload.png"
                    class="h-[24px] ml-2 cursor-pointer hidden"
                    alt=""
                  />
                </label>
                <img
                  v-if="document.name"
                  src="../assets/icons/delete.png"
                  class="h-[24px] ml-2 cursor-pointer"
                  @click="removeFile(index, personIndex)"
                  alt=""
                />
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <div class="w-full mt-10 flex justify-between">
    <Button btntext="Back" />
    <Button btntext="Next" />
  </div>
</template>

<style scoped>
.material-icons {
  font-size: 20px !important;
  color: #f0c10e;
  cursor: pointer;
}
</style>
