# File Upload Portal

## Overview
The **File Upload Portal** is a secure web-based tool for uploading, downloading, and deleting files. It is designed to streamline file management using modern serverless architecture and secure authentication via Azure Active Directory (Azure AD). Built for scalability, this solution is ideal for internal tools, document repositories, or lightweight CMS use cases.

## Features
- Upload files to Azure Blob Storage through a user-friendly interface  
- List, download, and delete files from the portal  
- Secure access using **Azure AD authentication**  
- Scalable, serverless backend with **Azure Functions**  
- Real-time feedback for file status and actions  
- CI/CD pipeline for deployment to Azure Static Web App  

## Technologies Used
- **Frontend:** Angular  
- **Backend:** Azure Functions (.NET Core)  
- **Authentication:** Azure Active Directory (AD)  
- **Storage:** Azure Blob Storage  
- **CI/CD:** Azure DevOps Pipelines  
- **Hosting:** Azure Static Web Apps  

## Screenshots

### Azure AD login  
![login-azure ad](https://github.com/user-attachments/assets/ab7b9598-806c-45a2-b2f8-12dd85a73306)

### File Uploader Portal
![FileUpload-Main ](https://github.com/user-attachments/assets/0b590d5c-7fac-47ac-8a7a-9b0be1ca1eb4)


## Deployment
The portal is deployed using **Azure Static Web Apps** and **Azure DevOps** for automated CI/CD. Backend logic is hosted in **Azure Functions**, and all files are securely stored in **Azure Blob Storage** with restricted access via Azure AD login.

