/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateApplicantProfile = /* GraphQL */ `
  subscription OnCreateApplicantProfile($owner: String) {
    onCreateApplicantProfile(owner: $owner) {
      id
      email
      userName
      name
      yOe
      caFocus
      payOpt
      gender
      appStatus
      resume {
        bucket
        region
        key
      }
      employer
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateApplicantProfile = /* GraphQL */ `
  subscription OnUpdateApplicantProfile($owner: String) {
    onUpdateApplicantProfile(owner: $owner) {
      id
      email
      userName
      name
      yOe
      caFocus
      payOpt
      gender
      appStatus
      resume {
        bucket
        region
        key
      }
      employer
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteApplicantProfile = /* GraphQL */ `
  subscription OnDeleteApplicantProfile($owner: String) {
    onDeleteApplicantProfile(owner: $owner) {
      id
      email
      userName
      name
      yOe
      caFocus
      payOpt
      gender
      appStatus
      resume {
        bucket
        region
        key
      }
      employer
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateRecuriterComment = /* GraphQL */ `
  subscription OnCreateRecuriterComment($owner: String) {
    onCreateRecuriterComment(owner: $owner) {
      id
      candidateID
      comment
      createdOn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateRecuriterComment = /* GraphQL */ `
  subscription OnUpdateRecuriterComment($owner: String) {
    onUpdateRecuriterComment(owner: $owner) {
      id
      candidateID
      comment
      createdOn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteRecuriterComment = /* GraphQL */ `
  subscription OnDeleteRecuriterComment($owner: String) {
    onDeleteRecuriterComment(owner: $owner) {
      id
      candidateID
      comment
      createdOn
      createdAt
      updatedAt
      owner
    }
  }
`;
