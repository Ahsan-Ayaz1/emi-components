<script setup>
import { ref } from "vue";
import Button from "./Button.vue";

//Table Heading
const tableHeadings = [
  { id: 1, text: "Name" },
  { id: 2, text: "Upload" },
];

const uploadedDocuments = ref({
  memorandum_and_articles_of_association_documents: [],
  director_documents: [],
  shareholders_documents: [],
  declaration_of_trust_documents: [],
  registered_address_documents: [],
  incorporation_documents: [],
  incumbency_documents: [],
  additional_supporting_documents: [],
});

const documentTypes = {
  memorandum_and_articles_of_association_documents:
    "Memorandum and Articles of Associations",
  director_documents: "Certificate of Directorship or equivalent",
  shareholders_documents: "Certificate of Shareholder",
  declaration_of_trust_documents:
    "Declaration of Trust (if the UBO is not the Shareholder)",
  registered_address_documents: "Certificate of Registered Address",
  incorporation_documents: "Certificate of Incorporation",
  incumbency_documents: "Certificate of Incumbency",
  additional_supporting_documents: "Additional Supporting Documents",
};

const handleFileSelection = (event, documents) => {
  const files = event.target.files;
  if (files.length > 0) {
    Array.from(files).forEach((file) => {
      const randomId = Math.floor(Math.random() * 100000);
      const newDocument = { name: file.name, id: randomId, type: "JPG" };
      documents.push(newDocument);
    });
  }
};

const removeFile = (documentIndex, documentType) => {
  if (uploadedDocuments.value[documentType]) {
    uploadedDocuments.value[documentType].splice(documentIndex, 1);
  }
};
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
            class="px-6 border border-gray-400 py-4"
          >
            {{ heading.text }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-customBg">
        <template
          v-for="(documents, documentType) in uploadedDocuments"
          :key="documentType"
        >
          <tr class="border bg-customBg">
            <td
              :rowspan="documents.length + 1"
              scope="row"
              class="border border-customBorder py-2 rounded-md font-medium text-gray-900 whitespace-nowrap"
              style="width: 50%"
            >
              <div class="flex justify-between">
                <div class="flex px-2 items-center">
                  {{ documentTypes[documentType] }}
                </div>
                <label :for="documentType" class="flex justify-between">
                  <input
                    type="file"
                    :id="documentType"
                    ref="fileInput"
                    style="display: none"
                    multiple
                    @change="
                      (event) =>
                        handleFileSelection(
                          event,
                          uploadedDocuments[documentType],
                          documentType
                        )
                    "
                  />
                  <img
                    src="../assets/icons/file_upload.png"
                    class="h-[24px] ml-2 cursor-pointer"
                    alt=""
                  />
                </label>
              </div>
            </td>

            <!-- If there is no file uploaded by the user yet -->
            <td
              v-if="documents.length == 0"
              class="border py-4 border-customBorder"
              style="width: 50%"
            ></td>
          </tr>

          <!-- If there is file that are uploaded by the user -->
          <tr
            v-if="documents.length > 0"
            v-for="(document, index) in documents"
          >
            <td class="border py-4 border-customBorder" style="width: 50%">
              <div
                class="p-2"
                :class="{
                  'flex justify-end items-end': !document.name,
                  'flex justify-between items-end': document.name,
                }"
              >
                <label :for="`uploader_`" class="flex justify-between">
                  <input
                    type="file"
                    :id="`uploader_`"
                    ref="fileInput"
                    style="display: none"
                    multiple
                    @change="
                      (event) =>
                        handleFileSelection(
                          event,
                          uploadedDocuments[documentType],
                          documentType
                        )
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
                  @click="removeFile(index, documentType)"
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
