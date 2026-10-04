+-----------------------------------------+
|              SIMPUS-Mini                |
|-----------------------------------------|
|                                         |
|        [ Register New Member ]          |
|                                         |
|   Name             : [______________]   |
|   NIM              : [______________]   |
|   Birth Of Date    : [______________]   |
|   Birth Of Place   : [______________]   |
|   Username         : [______________]   |
|   Password         : [______________]   |
|   Confirm-Password : [______________]   |
|                                         |
|          [   Register   ]               |
|                                         |          
+-----------------------------------------+


## User Flow - The librarian searches for members whose loans are past their due date

[Officer Sign In] -> [Dashboard] -> [Select "Borrowing List" menu]

## User Flow - Lending an Unreturned/Checked-Out Book to a Different Member

[Officer Sign In] -> [Dashboard] -> [Select "New Borrowing" menu]
        -> [Select New Member (Member B)] -> [Select Book (Book is currently borrowed by Member A)]
        -> [System detects Book status: Checked-out]
        -> [Display Warning Modal: "Book currently borrowed by Member A"]
        -> [Select "Return & Re-issue"] -> [Auto-return Book from Member A (Calculate overdue fine if any)]
        -> [Create New Borrowing record for Member B] -> [Save] -> [Back to Dashboard]