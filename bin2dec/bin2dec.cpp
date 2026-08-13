#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
    string binaryStr;
    cout << "Enter up to 8 binary digits: ";
    cin >> binaryStr;

    if (binaryStr.length() > 8) {
        cout << "Error: too many digits (max 8)." << endl;
        return 1;
    }

    // Validate each character is '0' or '1'
    for (char c : binaryStr) {
        if (c != '0' && c != '1') {
            cout << "Error: '" << c << "' is not a valid binary digit." << endl;
            return 1;
        }
    }

    int decimal = 0;
    int length = binaryStr.length();

    for (int i = 0; i < length; i++) {
        int digit = binaryStr[i] - '0';       // char to int
        int position = length - 1 - i;        // place value from the right
        decimal += digit * pow(2, position);  // the "single mathematical function" requirement
        cout << position << endl;
    }

    cout << "Decimal: " << decimal << endl;
    return 0;
}