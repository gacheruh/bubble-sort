public class bubble_sort{
    public static void main(String[] args){
        int[] arr = bubbleSort(new int[]{6, 3, 4, 34, 9, 1, 5, 2});

        //In Java, when you print an array directly using System.out.println(), it will print the default toString() representation of the array, which is in the format of "[I@<hashcode>".
        // To print the sorted array instead of the default toString() representation, you need to loop through the array and print each element separately.
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
    }

    public static int[] bubbleSort(int[] arr){
        for(int i = 0; i < arr.length; i++){
            for(int j = 0; j < arr.length - 1; j++){
                if(arr[j] > arr[j + 1]){
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
}
