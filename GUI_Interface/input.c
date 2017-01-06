#include<stdio.h>

int main(){
	int n,a1,b1,a2,b2,a3,b3,a4,b4,c1=0,c2=0,c3=0,c4=0,i=0;
	unsigned int res=0;
	scanf("%d",&n);
	scanf("%d",&a1); scanf("%d",&a2); 	scanf("%d",&a3); scanf("%d",&a4);
	scanf("%d",&b1); scanf("%d",&b2); 	scanf("%d",&b3); scanf("%d",&b4);

	for(i=0 ; i<n ; i++){
		c1 = a1 + b1;
		c2 = a2 + b2;

		c3 = a3 + b3;
		c4 = a4 + b4;

		a3 = c1 - a1;
		a4 = c2 - a2;

		b1 = c3 - c1;
		b2 = c4 - c2;

		a1 = b1 * a3;
		a2 = b2 * a4;

		b3 = b3 * c3;
		b4 = b4 * c4;

          c1 = a1 / b1;
          c2 = a2 / b2;

          c3 = a3 / b3;
		c4 = a4 / b4;

		c1 = c1 + c3;
		c2 = c2 + c4;

		res += c1 + c2;
    }
	printf("Result=%d\n",res);
	return 0;
}
