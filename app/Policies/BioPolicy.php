<?php

namespace App\Policies;

use App\Models\Applicants;
use App\Models\User;

class BioPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }


    /**
     * Determine if the user can update the applicant's bio.
     */
    public function update_bio(User $user, Applicants $applicant)
    {
        // Example logic: only the owner of the bio or an admin can update
        return $user->id === $applicant->user_id;
    }
}
