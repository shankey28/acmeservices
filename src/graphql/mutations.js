/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createApplicantProfile = /* GraphQL */ `
  mutation CreateApplicantProfile(
    $input: CreateApplicantProfileInput!
    $condition: ModelApplicantProfileConditionInput
  ) {
    createApplicantProfile(input: $input, condition: $condition) {
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
export const deleteApplicantProfile = /* GraphQL */ `
  mutation DeleteApplicantProfile(
    $input: DeleteApplicantProfileInput!
    $condition: ModelApplicantProfileConditionInput
  ) {
    deleteApplicantProfile(input: $input, condition: $condition) {
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
export const createRecuriterComment = /* GraphQL */ `
  mutation CreateRecuriterComment(
    $input: CreateRecuriterCommentInput!
    $condition: ModelRecuriterCommentConditionInput
  ) {
    createRecuriterComment(input: $input, condition: $condition) {
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
export const deleteRecuriterComment = /* GraphQL */ `
  mutation DeleteRecuriterComment(
    $input: DeleteRecuriterCommentInput!
    $condition: ModelRecuriterCommentConditionInput
  ) {
    deleteRecuriterComment(input: $input, condition: $condition) {
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
export const updateApplicantProfile = /* GraphQL */ `
  mutation UpdateApplicantProfile(
    $input: UpdateApplicantProfileInput!
    $condition: ModelApplicantProfileConditionInput
  ) {
    updateApplicantProfile(input: $input, condition: $condition) {
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
export const updateRecuriterComment = /* GraphQL */ `
  mutation UpdateRecuriterComment(
    $input: UpdateRecuriterCommentInput!
    $condition: ModelRecuriterCommentConditionInput
  ) {
    updateRecuriterComment(input: $input, condition: $condition) {
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
